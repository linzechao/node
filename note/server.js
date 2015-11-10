/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 14-8-11
 * Time: 下午1:23
 * To change this template use File | Settings | File Templates.
 */
var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("<hr><hr><h1 style='text-align:center;'>Hello, World!</h1><hr>");
    response.end("<hr>");
}).listen(8888);

console.log('Server running at http://192.168.1.131:8888/');