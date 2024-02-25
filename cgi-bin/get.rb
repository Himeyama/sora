# frozen_string_literal: true

require "cgi"
require "json"
require "securerandom"

cgi = CGI.new
print cgi.header("application/json")
params = cgi.params

