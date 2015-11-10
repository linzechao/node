var http = require('http');

var server = http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type':'text/html'});
	res.write(req.url);
	res.write('<h1>Hello Node Js</h1>');
	res.end();
});

server.listen(80);
server.on('close', function() {
	console.log('close');
});

//server.close();