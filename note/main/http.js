/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 14-11-10
 * Time: 上午9:08
 * To change this template use File | Settings | File Templates.
 */

var http = require('http');

var server = http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html', 'developer' : 'SuperChao'});

    for (var t in http)
        response.write(t + "<br>");
    response.write("<hr>");

    response.end();

}).listen("8888");