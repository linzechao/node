var express = require('express'),
	app = express();

// 应用级中间件
// 没有挂载路径的中间件，应用的每个请求都会执行该中间件
app.use(function (req, res, next) {
	console.log('无论谁（请求）都会执行这个方法。')
	next();
});


// 挂载至 /user/:id 的中间件，任何指向 /user/:id 的请求都会执行它
app.use('/user/:id', function (req, res, next) {
	console.log('Request Type: ', req.method);
	next();
});


// 路由和句柄函数(中间件系统)，处理指向 /user/:id 的 GET 请求
app.get('/user/:id', function (req, res, next) {
	res.send('USER');
});


// 下面这个例子展示了在一个挂载点装载一组中间件。
app.use('/user/:id', function(req, res, next) {
  console.log('Request URL:', req.originalUrl);
  next(); // 跳转至37行（栈中下一个中间件）
  // 下面的中间件永远不执行

  next('route'); // 使用这个方法，32行执行
}, function (req, res, next) {
  console.log('Request Type:', req.method);
});

// 处理 /user/:id， 打印出用户 id
app.get('/user/:id', function (req, res, next) {
  res.end(req.params.id);
});


// 路由级中间件
var router = express.Router();

// 没有挂载路径的中间件，通过该路由的每个请求都会执行该中间件
router.use(function (req, res, next) {
	console.log('Time: ', Date.now());
	next();
});


// 错误处理中间件
/*
错误处理中间件有 4 个参数，
定义错误处理中间件时必须使用这 4 个参数。
即使不需要 next 对象，也必须在签名中声明它，
否则中间件会被识别为一个常规中间件，不能处理错误。
*/
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


// 内置中间件
// static是唯一一个内置中间件
var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now());
  }
}

app.use(express.static('public', options));


// 第三方中间件
var cookieParser = require('cookie-parser');
// 加载用于解析 cookie 的中间件
app.use(cookieParser());



