/*
test 1:
console.log('b starting');
exports.done = false;
var a = require('./a.js');
console.log('in b, a.done = %j', a.done);
exports.done = true;
console.log('b done');
*/

/*
test 2:
var a = require('./a');
a.on('ready', function() {
  	console.log('module a is ready'); // 直接报错
});
*/

/*
test: 3:
var a = require('./a');
setTimeout(function() {
	console.log(a.a); // 获取不到
}, 4000);
*/

/*
test 4:
*/
console.log(module.filename); // 返回该文件的路径
console.log(module.id); // 同上
console.log(module.loaded); // 标识模块是否加载完
// console.log(module.parent); // 引用该模块的模块
