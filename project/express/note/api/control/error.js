var express = require('express'),
	app = express();


// logErrors 将请求和错误信息写入标准错误输出、日志或类似服务：
function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
}

// clientErrorHandler 的定义如下
// （注意这里将错误直接传给了 next）：
function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: 'Something blew up!' });
  } else {
    next(err);
  }
}


// 需要定义在所有use后面
app.use(function (err, req, res, next) {
	console.log(err.stact);
	res.status(500).send('Something broke!');
});


// 如果向 next() 传入参数（除了 ‘route’ 字符串），
// Express 会认为当前请求有错误的输出，
// 因此跳过后续其他非错误处理和路由/中间件函数。
// errorHandler 能捕获所有错误，其定义如下：
function errorHandler(err, req, res, next) {
  res.status(500);
  res.render('error', { error: err });
}


