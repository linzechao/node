var http = require('http');
var urls = require('url');
var util = require('util');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plais'});
	res.end(util.inspect(urls.parse(req.url, true)));
}).listen(80);

// http://sc/login?name=linzechao&password=631924081