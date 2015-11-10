var http = require('http');

var querystring = require('querystring');

var util = require('util');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/json'});
	var post = '';
	
	req.on('data', function(chunk) {
		post += chunk;
	});
	
	req.on('end', function() {
		post = querystring.parse(post);
		res.end(util.inspect(post));
	});
}).listen(80);