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
	console.log(multer());
	res.json(req.body);

}).listen(4000);

var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/cookie', function (req, res) {
	res.json(req.cookie);
});

