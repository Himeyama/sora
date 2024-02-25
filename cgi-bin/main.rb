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

def get_json(params)
  return unless params.key?("data")

  data = params["data"][0]
  json = read_json(@json_file_path)

  if data != "" && !data.nil?
    json.append({
                  content: data,
                  uuid: SecureRandom.uuid
                })
    File.open(@json_file_path, "w") do |f|
      f.write JSON.pretty_generate(json)
    end
  end
  print(JSON.pretty_generate(json))
end

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

  removefile = params["removefile"][0]
  response = {
    filename: removefile,
    status: "NG"
  }

  return if [".gitignore", "data.json"].include?(response[:filename])

  file_path = File.join(File.expand_path("../data"), response[:filename])

  if File.exist?(file_path)
    if File.delete(file_path)
      response[:status] = "OK"
    end
  end

  print JSON.pretty_generate(response)
end

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
