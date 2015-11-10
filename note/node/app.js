/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 14-11-25
 * Time: 下午2:57
 * To change this template use File | Settings | File Templates.
 *
 * 服务器
 */

var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.set('vies', './views');
app.set('view engine', 'jade');
app.listen(port);

console.log('node started on port ' + port);

// index page
app.get('/', function(req, res) {
	res.render('index', {
		title:'我的首页'
	});
});

// detail page
app.get('/movie/:id', function(req, res) {
	res.render('detail', {
		title:'详情页面'
	});
});

// admin page
app.get('/admin/movie', function(req, res) {
	res.render('admin', {
		title:'后台录入'
	});
});

// list page
app.get('/admin/list', function(req, res) {
	res.render('list', {
		title:'后台列表'
	});
});