require 'cgi'
cgi = CGI.new
print cgi.header
params = cgi.params

