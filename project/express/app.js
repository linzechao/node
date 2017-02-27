// 原生
var path = require('path');

// 插件
var express = require('express');
var handlebars = require('handlebars');
var consolidate = require('consolidate'); // 修改模板引擎
var bodyParser = require('body-parser'); // 解析post提交

// 路由
var index = require('./routes/index');
var notice = require('./routes/notice');

// 主要
var app = express();

// 视图路径
app.set('views', path.join(__dirname, 'views'));

// 模板引擎
// 修改视图文件后缀名
app.engine('html', consolidate.handlebars);
// 在上面的基础上选择html为模板
app.set('view engine', 'html');
// 上线后使用模板缓存
// app.set('view cache', true);

// 解析post提交
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// 静态路径
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));

// 使用路由
app.use('/', index);
app.use('/notice', notice);

// 404处理
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// 开发报错
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            title: 'Error Message.',
            message: err.message,
            error: err
        });
    });
}

// 线上报错
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        title: 'Error Message.',
        message: err.message,
        error: {}
    });
});

// 暴露接口
module.exports = app;
