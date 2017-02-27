var head = require('./head'),
	body = require('./body');

exports.createCat = function(name) {
	this.name = name;
	head.createHead();
	body.createBody();
};
