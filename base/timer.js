// 定时器都是全局变量，不需要require
// 定时执行


/*
var timeout = setTimeout(function(a, b) {
	console.log(a);
	console.log(b);

}, 1000, 'this is param a!', 'this is param b!');

clearTimeout(timeout); // 阻止(清除)事件
clearInterval(timeout); // 照常执行
timeout = null; // 清除掉定时器
console.log(timeout);
timeout.unref(); // 终止定时器(再次调用不受影响)
timeout.ref(); // 开启定时器(同上)
*/



// 隔时执行
/*
var interval = setInterval(function(a, b) {
	console.log(a);
	console.log(b);

}, 1000, 'this is param a!', 'this is param b!');

clearInterval(interval); // 同上
clearTimeout(interval); // 特殊(也可清除，效果一样)
interval = null;
console.log(interval);

// ?:执行了2次后停止
interval.unref(); // 终止定时器(再次调用不受影响)

setTimeout(function() { // 影响前面的unref()方法
	// interval.ref();
}, 5000); // 开启定时器(同上)
*/

var immediate = setImmediate(function(a, b){ // 立即执行方法
	console.log(a, b);

}, 'this is a!', '\nthis is b!');

clearImmediate(immediate); // 清除


