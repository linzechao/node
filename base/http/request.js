var http = require('http');

http.request(9000, '127.0.0.1', function() {
	console.log('请求成功....');
});

