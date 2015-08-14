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
	// res.send(req.stale); // 是否为混乱的
	// res.send(req.subdomain); // 子域名
	// res.send(req.xhr); // 是否是ajax请求
	// ----Methods----
	// 
	// Accept: text/html
	/*req.accepts('html');
	// => "html"

	// Accept: text/*, application/json
	req.accepts('html');
	// => "html"
	req.accepts('text/html');
	// => "text/html"
	req.accepts(['json', 'text']);
	// => "json"
	req.accepts('application/json');
	// => "application/json"

	// Accept: text/*, application/json
	req.accepts('image/png');
	req.accepts('png');
	// => undefined

	// Accept: text/*;q=.5, application/json
	req.accepts(['html', 'json']);
	// => "json"*/

	// req.get(field)
	// With Content-Type: text/html; charset=utf-8
	/*req.is('html');
	req.is('text/html');
	req.is('text/*');
	// => true

	// When Content-Type is application/json
	req.is('json');
	req.is('application/json');
	req.is('application/*');
	// => true

	req.is('html');
	// => false*/
	

}).listen(4000);

var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/cookie', function (req, res) {
	res.json(req.cookie);
});

