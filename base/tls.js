// TLS(SSL)服务
var tls = require('tls');
// console.log(tls);

// console.log(tls.CLIENT_RENEG_LIMIT); // 每分钟重新协商的次数限制，默认3次
// console.log(tls.CLIENT_RENEG_WINDOW); // 重新协商窗口的秒数，默认10分钟
// console.log(tls.getCiphers()); // 支持的SSL加密器名字

var server = tls.createServer({key: 'super', cert: 'hehe'}, function(socket) {
	console.log('服务器已连接', socket.authorized ? '已授权' : '未授权');
  	socket.write("欢迎！\n");
  	socket.setEncoding('utf8');
  	socket.pipe(socket);
});

server.listen(8000, function() {
	console.log('server bound...');
});
// console.log(server);

var socket = tls.connect(8000, options, function() {
  console.log('client connected', socket.authorized ? 'authorized' : 'unauthorized');
  process.stdin.pipe(socket);
  process.stdin.resume();
});

socket.setEncoding('utf8');
socket.on('data', function(data) {
  console.log(data);
});

socket.on('end', function() {
  server.close();
});
