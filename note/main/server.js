/*
 */
var http = require('http');
var url = require("url");
var queryString = require("querystring");

var start = function() {
    var server = http.createServer(function (request, response) {
        var pathName = url.parse(request.url).pathname;
        var queryArr = url.parse(request.url).query;

        var queryStr = queryString.parse(queryArr);

        response.writeHead(200, {'Content-Type': 'text/html', 'developer' : 'SuperChao'});

        response.write(pathName + "<hr>" + queryArr + "<hr>" + queryStr + "<hr>");

        for (var qs in queryStr) {
            response.write(qs + "→" + queryStr[qs] + "<hr>");
        }
        response.end();
    });
    server.listen("8090");
}

exports.start = start;




