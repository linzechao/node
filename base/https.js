// https协议，与http一致
var https = require('https');
// console.log(https);

var server = https.createServer({key: 'key', cert: 'cert'}, function(req, res) {
	res.writeHead(200);
	res.end('Hello, Https!');
});

server.listen(8000);

/*
server.listen(port, [host], [backlog], [callback])
server.listen(path, [callback])
server.listen(handle, [callback])
*/

/*server.close(function() {
	console.log('关闭服务器~');
});*/