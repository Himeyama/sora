# frozen_string_literal: true

require "cgi"
require "json"
require "securerandom"

def get_content_type(filename)
  content_types = {
    ".txt" => "text/plain",
    ".json" => "application/json",
    ".js" => "text/javascript",
    ".css" => "text/css",
    ".csv" => "text/csv",
    ".pdf" => "application/pdf",
    ".xls" => "application/vnd.ms-excel",
    ".xlsx" => "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ".doc" => "application/msword",
    ".docx" => "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ".ppt" => "application/vnd.ms-powerpoint",
    ".pptx" => "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    ".gif" => "image/gif",
    ".bmp" => "image/bmp",
    ".svg" => "image/svg+xml",
    ".zip" => "application/zip",
    ".lzh" => "application/x-lzh",
    ".tar" => "application/x-tar",
    ".mp3" => "audio/mpeg",
    ".mp4" => "video/mp4",
    ".mpeg" => "video/mpeg",
    ".jpg" => "image/jpeg",
    ".jpeg" => "image/jpeg",
    ".png" => "image/png",
    ".html" => "text/html"
  }

  ext = File.extname(filename)
  content_types[ext] || "text/html"
end

#
# ファイルを取得
#
# GET: /get?filename=image.png
#
def file
  cgi = CGI.new
  params = cgi.params
  unless params.key?("filename")
    print cgi.header("application/json")
    print(JSON.pretty_generate({status: "NG"}))
    return
  end

  if params["filename"].size == 0
    print cgi.header("application/json")
    print(JSON.pretty_generate({status: "NG"}))
    return
  end

  file_path = File.join(File.expand_path("../data"), params["filename"][0])
  File.open(file_path, "rb") do |f|
    cgi.out(
      {
        "type" => get_content_type(file_path),
        "content-disposition" => "inline; filename=#{File.basename(file_path)}"
      }
    ) do
      f.read
    end
  end
end

file
