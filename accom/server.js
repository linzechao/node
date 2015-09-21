var http = require('http'),
	fs = require('fs'),
	path = require('path'),
	// 根据文件的扩展名得出MIME类型
	mime = require('mime'),
	cache = {},
	chatServer = require('./lib/chat_server');

// 404
function send404 (response) {
	response.writeHead(404, {'Content-Type': 'text/plain'});
	response.write('Error 404: resource not found.');
	response.end();
}

// 文件数据服务
function sendFile (response, filePath, fileContents) {
	response.writeHead(200, {'Content-Type': mime.lookup(path.basename(filePath))});
	response.end(fileContents);
}

// 读取文件
function serveStatic (response, cache, absPath) {
	if (cache[absPath]) {
		sendFile(response, absPath, cache[absPath]);
	} else {
		fs.exists(absPath, function (exists) {
			if (exists) {
				fs.readFile(absPath, function (err, data) {
					if (err) {
						send404(response);
					} else {
						cache[absPath] = data;
						sendFile(response, absPath, data);
					}
				});
			} else {
				send404(response);
			}
		});
	}
}

// 创建HTTP服务器
var server = http.createServer(function (request, response) {
	var filePath = false;
	// 判断访问路径
	if (request.url === '/') {
		filePath = 'public/page/index.html';
	} else {
		filePath = 'public' + request.url;
	}
	var absPath = './' + filePath;
	serveStatic(response, cache, absPath);
});

// 启动监听
server.listen(4040, function () {
	console.log('Server listening on port 4040.');
});

// 启动自定义服务
chatServer.listen(server);
