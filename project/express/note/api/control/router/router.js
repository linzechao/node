var express = require('express'),
	router = express.Router({
		caseSensitive: true, // 启动大小写区分
		mergeParams: false, // 冲突后，使用后代路径
		strict: true // 使用严格模式，斜杠的区别
	});


// 中间件，每次访问都会执行
router.use(function (req, res, next) {
	// console.log('welcome to router');
	next(); // 交给下一个中间件
});

router.get('/', function (req, res, next) {
	console.log('welcome to router index');
	res.end('Hey index!');
});

// 返回该路径下home路径
router.get('/home', function (req, res, next) {
	console.log('welcome to ' + req.originalUrl + '/home')
	res.end('Hey home!');
});

// ----Methods----
// 每次有访问到id，则执行， 被覆盖掉后也不执行
router.param(['id', 'page'], function (req, res, next, value) {
	console.log('Called Only Once', value);
	next();
});

// 已经被弃用？？
// router.param('id', 2000);


// 被下面的方法覆盖
// router.get('user/:id/:page', function (req, res, next) {
// 	console.log('Although this matches');
// 	next();
// });



router.get('/user/:id/:page', function (req, res) {
	// console.log('and this matches too');
	res.end('Hello, Hey Hey, Let\'s Go!');
});







module.exports = router;
