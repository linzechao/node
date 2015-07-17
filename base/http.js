var http = require('http');

// console.log(http.STATUS_CODES); // 状态码

// 创建服务端
var server = http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Hello, NodeJs');
	response.end();
});

server.listen(9000);
console.log('项目启动：请打开http://127.0.0.1:9000');
console.log(server instanceof http.Server); // true

server.on('close', function() {
	console.log('服务器被关闭了....'); // 关闭服务器后不执行？
});

server.on('request', function(request, response) {
	console.log('trigger request event'); // 每次连接，都会执行2次？
});

server.on('connection', function(socket) {
	console.log('connection socket'); // 每次连接，都会执行2次？
});

/*
server.close(function() {
	console.log('直接关闭服务器....');
});
*/

// createClient已经被放弃使用，可使用request代替
// http.createClient() ==> http.request(); // 创建一个客户端
