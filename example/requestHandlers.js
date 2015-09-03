// 控制器
var exec = require('child_process').exec,
	querystring = require('querystring');

exports.start = function (response) {
	// console.log('Request handler "start" was called.');
	// 模拟非阻塞
	exec('ls -lah', function (error, stdout, stderr) {
	// exec('find /', {timeout: 10000, maxBuffer: 20000 * 1024}, function (error, stdout, stderr) {
		var body = '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>start upload</title></head><body><form action="/upload" method="post"><textarea name="text" cols="60" rows="20"></textarea><input type="submit" value="Submit text"></form></body></html>';
		response.writeHead(200, {'Content-Type': 'text/html'});
		// response.write('Welcome to start!\n');
		response.write(body);
		response.end();
	});
};

exports.upload = function (response, postdata) {
	// console.log('Request handler "upload" was called.');
	response.writeHead(200, {'Content-Type': 'text/html'});
	// response.write('Welcome to upload!');
	var postdata = querystring.parse(postdata).text;
	var body = '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>success upload</title></head><body>'
	+ postdata + '</body></html>';
	response.write(body);
	response.end();
};
