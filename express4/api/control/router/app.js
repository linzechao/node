var app = require('express')(),
	router = require('./router');

app.use('/', router);

app.listen(4000);
