var express = require('express'),
	router = express.Router();

router.get('/', function (req, res, next) {
	// res.send('Hello, You! Welcome to Router!');
	res.end('\n' + req.baseUrl); // 调用该方法的基础路径
	// console.log('Hello, You! Welcome to Router!');
});

module.exports = router;

