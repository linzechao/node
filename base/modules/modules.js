// 模块

/*
exports.xx();
exports.yy; // 使用这种，为提供接口，以便别人调用

module.exports; // 使用这种，为提供构造方法
*/


/*
引入循环
1、a.js

console.log('a starting');
exports.done = false;
var b = require('./b.js');
console.log('in a, b.done = %j', b.done);
exports.done = true;
console.log('a done');


2、b.js

console.log('b starting');
exports.done = false;
var a = require('./a.js');
console.log('in b, a.done = %j', a.done);
exports.done = true;
console.log('b done');


3、main.js

console.log('main starting');
var a = require('./a.js');
var b = require('./b.js');
console.log('in main, a.done=%j, b.done=%j', a.done, b.done);

解析：首先main.js加载a.js,接着a.js又去加载b.js。
这时，b.js会尝试去加载a.js。为了防止无限的循环，
a.js会返回一个unfinished copy给b.js。然后b.js就会停止加载，
并将其exports对象返回给a.js模块。

结果：
main starting
a starting
b starting
in b, a.done = false
b done
in a, b.done = true
a done
in main, a.done=true, b.done=true


test 1:
console.log('main starting');
var a = require('./a.js');
var b = require('./b.js');
console.log('in main, a.done=%j, b.done=%j', a.done, b.done);
*/

/*
核心模块
// 已被转成二进制文件
// 存在node源码的lib/目录下
require('http'); // 优先加载内置HTTP模块
*/

/*
文件模块
1、如果没有找到引入的模块名，则会在名字后面加上.js、.json、.node进行查找
2、以“/”为前缀，表示绝对路径
3、以“./”为前缀，表示相对路径
// 2和3引入的要么是核心模块，要么就是mode_modules文件里面的模块
4、如果模块不存在，抛出一个code属性为'MODULE_NOT_FOUND'的错误。
5、从该路径上查找node_modules文件夹，找不到，一直往上一级一级找
*/

/*
给module.expors赋值必须立即生效, 不能在回调中执行, 这样不工作	
*/

// 引用了b.js
// require('./a');
// require('./b');

// console.log(module.children); // 返回所有引用的模块
// console.log(require.resolve('./a')); // 返回模块路径，但不加载

console.log(require.main === module); // true
