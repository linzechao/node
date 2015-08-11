var express = require('express'),
app = express();

app.set('view engine', 'jade'); // 使用视图引擎
// app.engine('jade', require('jade').__express);

// 返回json
app.get('/getJSON', function(req, res) {
	// console.log(server);
	// res.send('Hello, Super.');
	res.send({status: 1, data: [{name: 'lin', age: 18}, {name: 'ze', age: 20}, {name: 'chao', age: 22}, {name: 'super', age: 24}]});
});

app.get('/', function(req, res) {
	// 返回一个html，jade模板
	res.render('index', {title: 'jade demo', message: 'Hello Jade!'});
});

var server = app.listen(3000, function() {
	// console.log(server.address());
});

app.use(function(err, req, res, next) {
	console.log(err.stack);
	res.status(500).send('Something broke!');
});

