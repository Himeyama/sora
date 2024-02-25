# frozen_string_literal: true

require_relative "sora/version"

# sora module
module Sora
  class Error < StandardError; end
  # Your code goes here...

  require "webrick"

  def server(port: 8080, document_root: "./")
    srv = WEBrick::HTTPServer.new(
      {
        DocumentRoot: document_root,
        BindAddress: "0.0.0.0",
        Port: port,
        CGIInterpreter: RbConfig.ruby
      }
    )
    srv.mount("/cgi-bin", WEBrick::HTTPServlet::CGIHandler, "#{Dir.pwd}/cgi-bin/main.rb")
    srv.mount("/", WEBrick::HTTPServlet::FileHandler, "www/index.html")
    srv.mount("/style", WEBrick::HTTPServlet::FileHandler, "www/style.css")
    srv.mount("/js", WEBrick::HTTPServlet::FileHandler, "www/main.js")
    trap("INT") { srv.shutdown }
    srv.start
  end

  module_function :server
end
