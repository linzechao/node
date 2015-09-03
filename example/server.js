var http = require('http'),
	url = require('url');

// 服务器
exports.start = function (route, handle) {
	function onRequest (request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log('Request for ' + pathname + ' received.');

		route(handle, pathname);

		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write('Hello, Super!');
		response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log('Server has started.');
};
