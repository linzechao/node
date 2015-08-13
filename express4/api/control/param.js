var express = require('express'),
	app = express(),
	blog = express();

// 设置(需要放在最前面)
// 如果名字是一个应用程序的设置,它会影响应用程序的行为。下表列出应用程序设置。
// 1、路径是否区分大小写
app.set('case sensitive routing', true);
// 2、开发环境
app.set('env', 'string');
// 3、设置相应头
app.set('etag', 'Varied');
// 4、设置jsonp的回调方法
app.set('jsonp callback name', 'string');
app.set('jsonp callback name', '?call-back=');
// 5、设置发送的json格式缩进
app.set('json spaces', 4);
// 6、使用查询解析器“simple” or “extended”
app.set('query parser', 'simple');
// 7、是否严格的路径“/foo/”与“/foo”不一样
app.set('strict routing', true);
// 8、以一定数量的圆点分隔部分主机删除访问子域名
app.set('subdomain offset', 2);
// 9、是否使用代理
app.set('trust proxy', 'Varied');
// 10、视图String or Array
app.set('views', process.cwd() + '/views');
// 11、开启视图缓存
app.set('view cache', true);
// 12、使用视图引擎，可忽略后缀名
app.set('view engine', 'jade');
// 13、使“X-Powered-By:表达”HTTP头。
app.set('x-powered-by', true);


// 使用代理参数配置
app.set('trust proxy', 'Varied');




/*app.param('id', function (req, res, next, id) {
	console.log('CALLED ONLY ONCE');
	// console.log(req.param.id);
	next();
});

// user/下的所有子路径
app.get('/user/:id', function (req, res, next) {
	console.log('although this matches');
	next();
});

app.get('/user/:id', function (req, res) {
	console.log('and this matches too');
	res.end('good job!');
});*/


app.param(['id', 'page'], function (req, res, next, value) {
	// 有几个参数就执行几次
	console.log('CALLED ONLY ONCE with', value);
	next();
});

app.get('/user/:id/:page', function (req, res, next) {
	console.log('although this matches');
	next();
});

app.get('/user/:id/:page', function (req, res) {
	console.log('and this matches too');
	res.end('good job!');
});

app.use('/user/id/page', blog);

app.get('/super', function (req, res) {
	// console.log('Hello, Super');
	res.end('Hello, Super');
});

app.set('port', process.env.PORT || 4000);

var server = app.listen(app.get('port'), function (req, res) {
	// console.log(__dirname); // 绝对路径
	// console.log(app.get('port'));
});

// 返回一个访问路径
// console.log(blog.path());

app.route('/events')
	.all(function (req, res, next) {
		console.log('all function');
	})
	.get(function (req, res, next) {
		console.log('get function');
	})
	.post(function (req, res, next) {
		console.log('post function');
	});


// 错误处理
app.use(function (err, req, res, next) {
	console.log('error', err);
});


