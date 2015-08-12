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


