var http = require('http');

// console.log(http.STATUS_CODES); // 状态码

/*
// 创建服务端
http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('Hello, NodeJs');
	res.end();

}).listen(8090);
*/

// createClient已经被放弃使用，可使用request代替
// http.createClient() ==> http.request(); // 创建一个客户端

