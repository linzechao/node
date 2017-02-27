var http = require('http'),
	url = require('url');

// 服务器
exports.start = function (route, handle) {
	http.createServer(function (request, response) {
		var pathname = url.parse(request.url).pathname,
			postdata = '';
		request.setEncoding('utf8');
		// 接收数据
		request.on('data', function (chunk) {
			postdata += chunk;
		});
		// 接收结束
		request.on('end', function (chunk) {
			route(handle, pathname, response, postdata);
		});
	}).listen(8888);
	// console.log('Server has started.');
};
