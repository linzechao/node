// 客户端
var net = require('net');

/*
方法一：
net.connect({port: 8090}, function() {}); // 或createConnection

方法二：
net.connect(8090, function() {}); // 同上

方法三：
net.connect('/p/a/t/h/xx.sock', function() {}); // 同上
*/

var client = net.createConnection({port: 8090}, function() {
	console.log('连接成功....');

	client.write('Hello Server!');
	client.end();
});

client.on('data', function(data) {
	console.log('服务端说：' + data.toString());
	client.end();
});

client.on('end', function() {
	console.log('断开成功....');
});

client.on('error', function() {
	console.log('报错咯....');
	client.end();
});

