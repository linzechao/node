var http = require('http');

/*http.request({
	host: '127.0.0.1',
	port: 9000

}, function(request) {
	console.log('request success....');

	request.write('Hello, Server!');
	request.end();
});*/

var request = http.get({
	hostname: '127.0.0.1',
	port: 9000,
	agent: false // 仅仅为了这一个请求，而创建一个新的agent

}, function(res) {
	console.log('状态码：' + res.statusCode);
});

request.on('error', function(e) {
	console.log('error function....' + e.message);
});
