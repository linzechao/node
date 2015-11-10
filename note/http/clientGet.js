var http = require('http');
var urls = require('url');
var util = require('util');

http.createServer(function(req, res) {
	var parans = urls.parse(req.url, true);
	res.end(parans.query.password);
}).listen(80);

http.get({
	'host' : 'sc',
	path : '/login?name=linzechao&password=631924081',
	port : 80
	}, function(res) {
	res.setEncoding('utf-8');
	res.on('data', function(data) {
		console.log(data);
	});
});