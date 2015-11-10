/**
 * Created with JetBrains WebStorm.
 * User: Super
 * Date: 14-11-6
 * Time: 下午10:11
 * To change this template use File | Settings | File Templates.
 *
 *
 * E:\Web\node\server
 *
 * CommonJs
 * MongoDB
 */
var http = require("http");
http.createServer(function(request, response) {
    response.writeHead(200, {"Context-Type":"text/plain"});
    response.write("<h1>Hello, Wrold!</h1>");
    response.end("<hr><h2>Hei Man....</h2>");
}).listen(8090);
console.log("请在浏览器输入http://sc:8090");