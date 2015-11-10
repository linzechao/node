var http = require('http');
var querystring = require('querystring');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/json'});
	var post = '';
	
	req.on('data', function(chunk) {
		post += chunk;
	});
	
	req.on('end', function() {
		post = querystring.parse(post);
		res.end(post.name);
	});
}).listen(80);

var contents = querystring.stringify({
	name : 'super',
	age : 22,
	address : 'guangzhou'
});

var option = {
	host : 'sc',
	path : '/',
	post : 80,
	method : 'POST',
	headers : {
		'Content-Type' : 'application/x-www-form-urlencodes',
		'Content-Length' : contents.length
	}
};

var req = http.request(option, function(res) {
	res.setEncoding('utf-8');
	res.on('data', function(data) {
		console.log('...');
		console.log(data);
	});
});

req.write(contents);
req.end();