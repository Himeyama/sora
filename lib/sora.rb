# frozen_string_literal: true

require_relative "sora/version"

module Sora
  class Error < StandardError; end
  # Your code goes here...

  require 'webrick'

  def server(port: 8080, document_root: './')
    srv = WEBrick::HTTPServer.new(
      { 
        :DocumentRoot => document_root,
        :BindAddress => '0.0.0.0',
        :Port => port
      }
    )
    p Dir.glob("*")
    srv.mount('/cgi-bin', WEBrick::HTTPServlet::CGIHandler, './cgi-bin/main.rb')
    srv.mount('/', WEBrick::HTTPServlet::FileHandler, 'www/index.html')
    trap("INT"){ srv.shutdown }
    srv.start
  end

  module_function :server
end
