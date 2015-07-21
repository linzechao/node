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
	// socket.address(); // 连接详情
	// console.log(socket.remoteAddress); // 远程IP详情
	// console.log(socket.remotePort); // 远程端口
	// console.log(socket.localAddress); // 本地IP详情
	// console.log(socket.localPort); // 本地端口
	// console.log(socket.byteRead); // 所接收的字节数
	// console.log(socket.bytesWritten); // 所发送的字节数
});

socket.on('data', function(data) {
	console.log('服务端说：' + data);
});

socket.on('error', function() {
	console.log('报错咯....');
	socket.destroy(); // 销毁
});

socket.on('close', function() {
	console.log('close'); // 在end方法后触发
});

socket.on('end', function() {
	console.log('断开成功....');
});

socket.setTimeout(1000, function() { // 定时，为0时，禁用闲置超时
	socket.end('this is timeout function!');
});


// socket.setNoDelay(false); // 禁用纳格算法(Nagle)
// socket.setKeepAlive(false); // 禁用长连接
// socket.unref(); // 退出连接
// socket.ref(); // 恢复连接

socket.on('drain', function() {
	console.log('drain'); // 缓冲区被清除时触发
});


/*
socket.on('lookup', function(err, address, family) { // 连接前执行
	console.log(err);
	console.log(address);
	console.log(family);
});
*/

socket.on('timeout', function() {
	console.log('timeout'); // setTimeout执行后触发
});



