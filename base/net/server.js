// 服务端
var net =  require('net'),
	PORT = 8090, HOST = 'localhost';

var server = net.createServer(function(conn) {
	console.log('有客户端连接....');

	conn.on('end', function() {
		console.log('有客户端断开....');
	});

	conn.write('Hello Client!');
	// conn.pipe(conn); // 并没什么卵用

	server.getConnections(function(err, count) {
		// console.log(err); // 不报错时为空
		// console.log(count); // 返回当前连接数
	});

	// 客户端发送过来的数据
	conn.on('data', function(data) {
		console.log('客户端说：' + data.toString());
	});
});

/*
方法一：
server.listen('/p/a/t/h/xx.sock', function() {});
server.listen({}, function() {}); // {}为请求头
*/
server.listen(PORT, HOST, function() {
	console.log('服务器已启动....');
	// console.log(server.address()); // 返回连接详情
	// server.close();
	server.unref(); // 功能与close一样，但不触发相对绑定的事件，但是该方法可以用ref启动
	server.ref(); // 相当屏蔽了unref方法，但不能启动close掉的服务器
});

server.on('error', function(e) {
	console.log(e);

	if (e.code == 'EADDRINUSE') {
		console.log('地址被占用，重试中....');
		setTimeout(function() {
			server.close();
			server.listen(PORT, HOST);
		}, 1000);
	}

});

server.on('close', function() {
	console.log('服务器已关闭....');
});

server.on('unref', function() { // 无效
	console.log('退出服务....');
});

