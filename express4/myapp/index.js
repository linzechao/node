var express = require('express');
// console.log(express);

var app = express();
// console.log(app);

// 路由
app.get('/', function(req, res) {
	// console.log(res, req);
	res.send('Welcome to Get.');
});

app.post('/', function(req, res) {
	res.send('Welcome to Post.');
});

app.all('/secret', function(req, res, next) {
	console.log('Accessing the secret section.');
	next();
});

/*
路径，与正则差不多
'ab?cd' => b存在或者不存在
'ab+cd' => 至少一个b
'ab*cd' => *号代表任何数量的任何字符
'a(bc)?d' => bc存在或不存在
*/

var cb0 = function(req, res, next) {
	console.log('this is cb0.');
	next();
};

var cb1 = function(req, res, next) {
	console.log('this is cb1.');
	next();
};

var cb2 = function(req, res, next) {
	console.log('this is cb2.');
	next();
};

/*
正则路由
/a/ => 等同于'/a'
/.*fly$/ => 等同于'/*\*fly'
*/

app.get('/example/b', function(req, res, next) {
	console.log('response will be sent by the next function ...');
	next();

}, function(req, res) {
	res.send('Hello, from B!');
});

// 或者
app.post('/example/c', [cb0, cb1, cb2]);
// 又可以
app.all('/example/d', [cb0, cb1], cb2, function(req, res) {
	res.send('Hello, from D!');
});

// 减少冗余
app.route('/book').get(function(req, res) {
	res.send('Get a random book');

}).post(function(req, res) {
	res.send('Add a book');

}).put(function(req, res) {
	res.send('Update the book');
});



