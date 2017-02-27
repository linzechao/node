var express = require('express'),
	app = express();

app.get('/', function(req, res) {
	// console.log('Hello Server!');
	res.sendfile('./index.html');
});

app.listen(3000);

app.locals.title = 'Mr. Super';
app.locals.email = 'linzechao44@163.com';

// console.log(app.locals.title);
// console.log(app.locals.email);




