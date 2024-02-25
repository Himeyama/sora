# frozen_string_literal: true

require "cgi"
require "json"
require "securerandom"

cgi = CGI.new
print cgi.header("application/json")
params = cgi.params
@json_file_path = "../data/data.json"

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

get_json(params)
delete(params)
