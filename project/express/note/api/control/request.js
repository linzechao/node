var express = require('express'),
	app = express(),
	home = express(),
	user = express(),
	router = require('./router');

home.get('/', function (req, res, next) {
	// res.end(req); // 直接报错，你妹的
	res.end('Hello, You! Welcome to Home!');
});

// 加上冒号代表任何字母的子路径
home.get('/about/:way', function (req, res, next) {
	res.send('way: ' + req.params.way);
});

user.route('/').all(function (req, res, next) {
	res.end('Hello, You! Welcome to User!');
});

app.use('/', home);
app.use('/user', user);
app.use('/router', router);
app.get('/require', require('./require'));





app.listen(4000, function () {
	console.log('go, go, go~');
});

