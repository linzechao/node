// 实用工具
var util = require('util');
// console.log(util);

// var bar = 123;
// util.debuglog('hello from foo[%d]', bar); // 不同环境报错

// 格式化
// console.log(util.format('%d: %s, %j', 4, 'Super', {4: 'Super'}, 'Chao'));
// console.log(util.format('a', '-', 'b'));

// 日志
// util.log('this is util log function'); // 直接打印在控制台，带有时间格式

/*
console.log(util.inspect(
	{name: 'Super', age: 18},
	{
		showHidden: true, // 显示不可枚举属性
		depth: null, // 为null表示无穷递归
		colors: true, // 带上颜色输出
		customInspect: false // 定义在被检查对象上的 “inspect” 方法将不会被调用
	}
));
*/


// 使用全局定义util.inspect
// util.inspect.styles = true; // 没效果
// util.inspect.colors = 'blue';
// console.log(util.inspect({name: 'Super', age: 18}));

// 是否为数组
console.log(util.isArray({}));
console.log(util.isArray([]));


