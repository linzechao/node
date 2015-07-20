// 全局对象
// console.log(global); // global(顶级作用域)

// console.log(process); // process(进程对象)

// console.log(console); // console(控制台对象)

// console.log(Buffer); // 处理二进制数据

// console.log(require('./http')); // 引入模块，实际为每个模块本地方法，非全局


// console.log(require.cache); // 引入模块的缓存

// over
// console.log(require.extensions); // 将.sjs文件作为.js文件处理，已被废弃
// 废弃不能用，又不能删掉，哈哈，真悲催

// console.log(require.resolve('./http')); // 使用require查找模块本地位置，不加载模块
// 全局变量
// console.log(__filename); // 同上，非全局，也是该模块本地
// console.log(__dirname); // 同上，但不包括文件名

// console.log(module); // 当前模块的引用，本地
// console.log(exports); // module.exports的引用，本地

function print() {
	console.log('print ....');
}

// var timeout = setTimeout(print, 1); // 1毫秒后执行方法
// console.log(timeout);
// clearTimeout(timeout); // 直接清除，不执行
// timeout = null; // 还是会直接执行(标准的配合2条语句清除)
// console.log(timeout);

var interval = setInterval(print, 1000); // 每隔1000毫秒执行一次
// console.log(interval);
// clearInterval(interval); // 直接清除，不执行
clearTimeout(interval); // 同上
// interval = null; // 照常执行

