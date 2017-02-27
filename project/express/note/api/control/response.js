var express = require('express'),
	app = express();

app.use(express.static('load'));

app.get('/', function (req, res) {
	// console.log(res);
	// res.end('Hi');
	// console.log(res.app === app); // true
	/*console.log(res.headersSent); // 是否还已经发送了报文头
	res.send(res.headersSent);
	console.log(res.headersSent);*/
	// console.log(res.locals); // 本地数据
	// res.send(res.locals);

	// ----Methods----
	// res.cookie('name', 'tobi', {
	// 	domain: '.example.com',
	// 	path: '/admin', secure: true
	// });

	// res.cookie('rememberme', '1', {
	// 	expires: new Date(Date.now() + 900000),
	// 	httpOnly: true
	// });

	// res.download('load/load.json'); 下载一个文件

	// res.status(404).end();
	// res.status(500).end();

	// 一一注释掉，都会执行
	// res.format({
	  // 'text/plain': function(){
	  //   res.send('hey');
	  // },

	  // 'text/html': function(){
	  //   res.send('<p>hey</p>');
	  // },

	  // 'application/json': function(){
	  //   res.send({ message: 'hey' });
	  // },

	  // 'default': function() {
	  //   // log the request and respond with 406
	  //   res.status(406).send('Not Acceptable');
	  // }
	// });


	/*res.format({
	  text: function(){
	    res.send('hey');
	  },

	  html: function(){
	    res.send('<p>hey</p>');
	  },

	  json: function(){
	    res.send({ message: 'hey' });
	  }
	});*/
	app.set('jsonp callback name', 'cb');
	// res.status(500).json({error: 'ERROR MESSAGE!'});
	// 充当http头
	res.links({
	  next: 'http://api.example.com/users?page=2',
	  last: 'http://api.example.com/users?page=5'
	});

	// 设置路径
	res.location('/foo/bar');
	res.location('http://example.com');
	res.location('back');

	// 重定向
	// res.redirect('http://example.com');

	// 渲染
	// res.render('index');
	// res.sendFile(__dirname + '/tp.js')

	res.sendStatus(4000);

	// 设置类型
	/*res.type('.html');              // => 'text/html'
	res.type('html');               // => 'text/html'
	res.type('json');               // => 'application/json'
	res.type('application/json');   // => 'application/json'
	res.type('png');                // => image/png:*/

	// 添加相应头
	res.vary('User-Agent').render('docs');

	// res.status(500).jsonp({ error: 'message' });
});





app.listen(4000);
