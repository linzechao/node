var http = require('http');
// console.log(http.STATUS_CODES); // 状态码

// 创建服务端
var server = http.createServer(function(request, response) {
	// request种种事件与server一样
	// socket、connect、upgrade、continue、write、end....
	request.abort(); // 终止一个请求
	request.setTimeout(1000, function() {
		console.log('request setTimeout function....');
	});

	









	// response

	// response.writeHead(200, {'Content-Type': 'text/plain'});
	// response.write('Hello, NodeJs');

	// response.writeContinue(); // 发送信息到客户端

	// 优先于response.statusCode
	// response.writeHead(400); // 在end方法前面调用
	response.sendDate = false; // 禁用自动发送date
	// response.setHeader("Set-Cookie", [" type=ninja", "language=javascript"]);
	// response.getHeader('content-type'); // 获取头部信息
	// response.removeHeader('Content-Type'); // 删除头部信息
	// response.addTrailers({'Content-MD5': "7895bf4b8828b55ceaf47747b4bca667"}); // 尾随header加载完


	response.statusCode = 200;
	response.setHeader("Content-Type", "text/html"); // 设置头信息
	// response.write('Hello, Super!'); // 无论状态码如何，都会返回

	// response.on('close', function() {
	// 	console.log('response close function');
	// });

	
	response.setTimeout(1000, function() {
		console.log('response setTimeout function');
	});

	// 也是执行2次？
	// console.log(response.headersSent); // 只读，是否发送成功

	response.end('send over....');
});

// 监听连接
server.listen(9000, '127.0.0.1', function() {
	console.log('项目启动：请打开http://127.0.0.1:9000');
});
// console.log(server instanceof http.Server); // true

// server.listen('/p/a/t/h/xx.txt', function() {}); // 监听一个文件

// 关闭服务器后不执行？
server.on('close', function() {
	console.log('服务器被关闭了....');
});

server.on('data', function(data) {
	console.log(data.toString());
});

// createClient已经被放弃使用，可使用request代替
// http.createClient() ==> http.request(); // 创建一个客户端

// 客户端请求时触发
// 每次请求，都会执行2次？
// 浏览器才会触发
server.on('request', function(request, response) {
	console.log('trigger request event');
});

// 浏览器连接时触发
// server.on('connection', function(socket) {
// 	console.log('connection socket'); // 连接
// });

// 请求超过100次的时候触发
// 400等无效
server.on('checkContinue', function(request, response) {
	console.log('checkContinue function');
});

// 客户端连接的时候触发
server.on('connect', function(request, socket, head) {
	console.log('connect function');
});

// 客户端请求升级时触发
server.on('upgrade', function(request, socket, head) {
	console.log('upgrade function');
});

// 客户端连接失败
server.on('clientError', function(exception, socket) {
	console.log('clientError function');
});

// server.close(function() {
// 	console.log('禁止服务器再接收新的连接....');
// });

server.maxHeadersCount = 10; // 最大请求数量

// 每次连接后延迟执行
// server.setTimeout(1000, function() {
// 	console.log('server setTimeout function');
// });


// 响应事件
server.on('response', function(im) {
	console.log('response function....');
});

// 触发一个套接字
server.on('socket', function(socket) {
	console.log('socket function....');
});
