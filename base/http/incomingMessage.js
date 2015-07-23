var http = require('http');

var message = http.IncomingMessage();
console.log(message);

message.on('close', function(mess) {
	console.log(mess);
});

console.log(message.httpVersion); // HTTP版本，1.1或1.0

console.log(message.headers); // 请求头
