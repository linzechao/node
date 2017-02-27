var http = require('http'),
    monk = require('monk'),
    db = monk('localhost:27017/imooc');

var server = http.createServer(function (req, res) {
    var path = req.url;
    if (path.indexOf('/course') !== -1) {
        var course = db.get('course');
        course.find({}, {sort: {number: -1}}, function (error, docs) {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end('callback(' + JSON.stringify(docs) + ')');
        });
    } else if (path === '/show') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('Show');
    } else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello');
    }
});

server.listen(4004);
