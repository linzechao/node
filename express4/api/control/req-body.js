var app = require('express')(),
	bodyParser = require('body-parser'),
	multer = require('multer');

// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// for parsing multipart/form-data
// app.use(multer()); // 报错

// app.post('/', function (req, res) {
app.get('/', function (req, res) {
	// console.log(multer());
	// res.json(req.body);
	// res.send(req.hostname); // 主机名
	// res.send(req.ip); // ip
	// res.send(req.ips); // ips，代理，json
	// res.send(req.originalUrl); // 原始路径与查询
	// res.send(req.params); // 参数 json
	// res.send(req.path); // 路径
	// res.send(req.protocol); // 协议
	// res.send(req.query); // 查询 json
	// res.send(req.route); // path, stack, methods, json
	

}).listen(4000);

var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/cookie', function (req, res) {
	res.json(req.cookie);
});

