var net = require('net');
var socket = new net.Socket();
// console.log(socket);
socket.setEncoding('utf8'); // 设置编码

socket.connect(8090, function(conn) {
	console.log('连接成功....');
	// console.log(socket.bufferSize);
	socket.write('Hello Server!');
	// socket.end('886~');

	// socket.pause(); // 停止读取数据
	// socket.resume(); // 恢复读取数据

	socket.on('data', function(data) {
		console.log('服务端说：' + data);
	});
});

socket.on('error', function() {
	console.log('报错咯....');
	socket.destroy(); // 销毁
});

socket.on('end', function() {
	console.log('断开成功....');
});

socket.setTimeout(1000, function() { // 定时，为0时，禁用闲置超时
	socket.end('this is timeout function!');
});

