var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("<hr><hr><h1 style='text-align:center;'>Hello, World!</h1><hr>");
    response.end("<hr>");
}).listen(8090);

console.log('Server running at http://sc:8090/');