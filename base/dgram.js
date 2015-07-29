var dgram = require('dgram');
// console.log(dgram);

// udp4或udp6
var server = dgram.createSocket('udp4', function() {
	console.log('go....');
});
// console.log(server);

// 收到信息时触发
server.on('message', function(msg, rinfo) {
	console.log('收到 %d 字节，来自 %s:%d\n', msg.length, rinfo.address, rinfo.port);
});

// 连接时触发
server.on('listening', function() {
	console.log('listening function....');
});

// 关闭时触发
server.on('close', function() {
	console.log('close function....');
});

// 报错时触发
server.on('error', function() {
	console.log('error function....');
});




