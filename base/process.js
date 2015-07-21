// 进程(全局变量)
// console.log(process);

process.on('exit', function() {
  	// 设置一个延迟执行
  	setTimeout(function() { // 退出后，所有执行代码都停止
    	console.log('主事件循环已停止，所以不会执行');
  	}, 1);
  	console.log('exit方法，进程退出前执行');
});

// 不建议使用，建议使用domain(域)来处理
process.on('uncaughtException', function() {
	// 不会报错，但是程序还是不会继续执行下去
	console.log('这个方法用来捕获错误，使用这个方法后，永远不会报错。');
});

// console.log(a); // 默认行为是报错，程序退出
// console.log('我在exit后面....');

process.on('SIGINT', function() {
	console.log('收到SIGINT信号。退出请使用Ctrl+D');
});

// process.stdout.write('标准输出流....\n');
// process.stderr.write('标准错误流....\n');

/*
process.stdin.on('end', function() {
	process.stdout.write('end');
});

// process.stdin.resume(); // 好像冇什么卵用
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(data) {
	process.stdin.pause(); // 退出标准输入流
	console.log(data);
});
*/
	
// 第一个参数返回node
// 第二个参数返回js路径
// console.log(process.argv); // 普通参数
// console.log(process.execPath); // 执行文件的绝对路径

// console.log(process.execArgv); // 特殊参数(指令....) 

// 退出程序后创建一个核心文件
// process.abort();

/*
console.log('当前目录：' + process.cwd());

try {
	process.chdir('/tmp'); // 改变进程的当前工作目录
	console.log('新目录：' + process.cwd());

} catch(err) {
	console.log('chdir：' + err);
}
*/

// console.log(process.env); // 用户环境对象

// process.exit(4); // 退出，返回退出状态，会覆盖掉exitCode

// process.exitCode = 2;
// console.log(process.exitCode);

// 适用于Linux，Unix
// 不适用于Windows，Android
// 进程的群组标识
// process.setgid(404);
// console.log(process.getgid());
// 执行进程的用户ID
// process.setuid(500);
// process.getuid();
// 补充组ID的数据
// process.setgrounps([404, 500]);
// process.getgroups();
// 初始化
// process.initgroups(user, extra_group);
// process.initgroups('Super', 4444);

// console.log(process.version); // node版本

// console.log(process.versions); // 依赖包信息

console.log(process.config); // 配置

