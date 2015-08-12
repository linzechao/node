var express = require('express'),
	app = express();

app.param('id', function (req, res, next, id) {
	// console.log('CALLED ONLY ONCE');
	console.log(req.param);
	next();
});

app.get('/user/:id', function (req, res, next) {
	console.log('although this matches');
	next();
});

app.get('/user/:id', function (req, res) {
	console.log('and this matches too');
	res.end('good job!');
});

app.set('port', process.env.PORT || 4000);

var server = app.listen(app.get('port'), function (req, res) {
	console.log(__dirname); // 绝对路径
	console.log(app.get('port'));
});

// 错误处理
app.use(function (err, req, res, next) {
	console.log('error', err);
});

