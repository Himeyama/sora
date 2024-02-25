# frozen_string_literal: true

require "cgi"
require "json"
require "securerandom"

def get_content_type(filename)
  ext = File.extname(filename)
  case ext
  when ".txt" then
    "text/plain"
  when ".json" then
    "application/json"
  when ".js" then
    "text/javascript"
  when ".css" then
    "text/css"
  when ".csv" then
    "text/csv"
  when ".pdf" then
    "application/pdf"
  when ".xls" then
    "application/vnd.ms-excel"
  when ".xlsx" then
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  when ".doc" then
    "application/msword"
  when ".docx" then
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  when ".ppt" then
    "application/vnd.ms-powerpoint"
  when ".pptx" then
    "application/vnd.openxmlformats-officedocument.presentationml.presentation"
  when ".gif" then
    "image/gif"
  when ".bmp" then
    "image/bmp"
  when ".svg" then
    "image/svg+xml"
  when ".zip" then
    "application/zip"
  when ".lzh" then
    "application/x-lzh"
  when ".tar" then
    "application/x-tar"
  when ".mp3" then
    "audio/mpeg"
  when ".mp4" then
    "video/mp4"
  when ".mpeg" then
    "video/mpeg"
  when ".jpg" then
    "image/jpeg"
  when ".jpeg" then
    "image/jpeg"
  when ".png" then
    "image/png"
  when ".html" then
    "text/html"
  else
    "text/html"
  end
end

def get_file
  cgi = CGI.new
  params = cgi.params
  unless params.key?("filename")
    print cgi.header("text/plain")
    return
  end
 
  file_path = File.join(File.expand_path("../data"), params["filename"][0])
  File.open(file_path, "rb") do |f|
    cgi.out(
        {
            "type" => get_content_type(file_path),
            "content-disposition" => "inline; filename=#{File.basename(file_path)}"
        }){
        f.read
    }
  end
end

get_file()
