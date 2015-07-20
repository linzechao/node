/*
test 1:
console.log('a starting');
exports.done = false;
var b = require('./b.js');
console.log('in a, b.done = %j', b.done);
exports.done = true;
console.log('a done');
*/

/*
test 2:
setTimeout(function() {
	module.exports.emit('ready');
}, 1000);
*/

/*
test: 3:
setTimeout(function() {
	module.exports = {a: 'hello'}; // 不会保存起来
}, 1000);
*/
