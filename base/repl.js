/*
一个 Read-Eval-Print-Loop（REPL，读取-执行-输出循环）
既可用于独立程序也可很容易地被集成到其它程序中。
REPL 提供了一种交互地执行 JavaScript 并查看输出的方式。
它可以被用作调试、测试或仅仅尝试某些东西。
*/
var repl = require('repl');
// console.log(repl);

// 启动后进入命令行模式
var replServer = repl.start({
	prompt: ': ', // 修改命令行提示符
	useColors: false, // 冇效果
	writer: function() {
		// console.log('this is writer function');
		// 每次执行结果都会带上
		// console.log(new Date().toLocaleString());
		console.log('--------Mr. Super--------')
	}
});

// 关闭命令行时触发
replServer.on('exit', function() {
	console.log('886~');
	console.log('雷老妈妈啊~');
});

// 清除时触发
replServer.on('reset', function(context) {
	console.log('清除开始~！');
	console.log(context);
});

// console.log(replServer);
var person = {name: 'Super', age: 24};
// console.log(person);
replServer.person = person;

/*
.break - 当你输入一个多行表达式时，有时你走神了或者你不想完成这个表达式了。.break让你可以重头再来。
.clear - 重置context对象为一个空对象，并且清除所有的多行表达式。
.exit - 关闭I/O流，使得REPL退出。
.help - 显示这个特殊命令的列表。
.save - 将当前的REPL会话保存到一个文件 //.save ./file/to/save.js
.load - 将一个文件装载到当前的REPL会话 //.load ./file/to/load.js
*/