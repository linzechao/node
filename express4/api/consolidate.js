var express = require('express'),
	app = express(),
	consolidate = require('consolidate');

app.set('view engine', 'consolidate');

app.engine('mhtml', consolidate.jade);

app.get('/', function(req, res) {
	// res.render('index.mhtml', {title: 'Consolidate Demo', message: 'Hello Consolidate!'});
	res.render('index.jade', {title: 'jade demo', message: 'Hello Jade!'});
});

app.listen(4000);

