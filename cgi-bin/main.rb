# frozen_string_literal: true

require "cgi"
require "json"
require "securerandom"

cgi = CGI.new
print cgi.header("application/json")
params = cgi.params

@json_file_path = "../data/data.json"

def log(text)
  open("tmp", "a") do |f|
    f.puts(text)
  end
end

#
# JSON ファイルを読み込んで配列として返す関数
#
#   text = read_json("data.tmp")
#
def read_json(filename)
  unless File.exist? filename
    File.open(filename, "w") do |f|
      f.write "[]"
    end
  end
  json = []
  File.open(filename, "r") do |f|
    json = JSON.parse(f.read)
  end
  json
end

#
# データを取得
#
# - データがある場合: データを追加して保存し内容を JSON 形式で表示
# - データがない場合: 内容を JSON 形式で表示
#
# GET: /cgi-bin?data=
# GET: /cgi-bin?data=12345
#
def get_json(params)
  return unless params.key?("data")

  data = params["data"]
  json = read_json(@json_file_path)

  unless data.nil?
    content = data[0]
    if content != ""
      json.append({
                    content: content,
                    uuid: SecureRandom.uuid
                  })
      File.open(@json_file_path, "w") do |f|
        f.write JSON.pretty_generate(json)
      end
    end
  end
  print(JSON.pretty_generate(json))
end

#
# コンテンツを削除する
#
# GET: /cgi-bin?delete=9cba8adc-2f1f-4feb-86dd-e6daf0d26d41
#
def delete(params)
  return unless params.key?("delete")

  json = read_json(@json_file_path)

  json = json.filter { |e| e["uuid"] != params["delete"][0] }
  File.open(@json_file_path, "w") do |f|
    f.write JSON.pretty_generate(json)
  end

  response = {
    uuid: params["delete"][0],
    status: "OK"
  }
  print JSON.pretty_generate(response)
end

def save_file(params)
  return unless params.key?("file")

  file = params["file"][0]
  response = {
    filename: file.original_filename
  }

  return if [".gitignore", "data.json"].include?(response[:filename])

  file_path = File.join(File.expand_path("../data"), response[:filename])

  File.open(file_path, "wb") do |f|
    f.write file.read
  end

  print JSON.pretty_generate(response)
end

def remove_file(params)
  return unless params.key?("removefile")

  removefiles = params["removefile"]
  if removefiles.empty?
    print JSON.pretty_generate({ status: "NG" })
    return
  end

  removefile = removefiles[0]
  response = {
    filename: removefile,
    status: "NG"
  }

  if [".gitignore", "data.json", ""].include?(removefile)
    print JSON.pretty_generate({ status: "NG" })
    return
  end

  file_path = File.join(File.expand_path("../data"), removefile)

  response[:status] = "OK" if File.exist?(file_path) && File.delete(file_path)

  print JSON.pretty_generate(response)
end

#
# ファイル一覧を取得
#
# GET: /cgi-bin?files
#
def get_files(params)
  return unless params.key?("files")

  response = Dir.glob(File.join(File.expand_path("../data"), "*"))
  response.map! { |e| File.basename(e) }
  response.filter! { |e| !["data.json", ".gitignore"].include?(e) }
  print JSON.pretty_generate(response)
end

get_json(params)
delete(params)
save_file(params)
get_files(params)
remove_file(params)
