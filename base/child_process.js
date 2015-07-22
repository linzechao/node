// 子进程
var cpro = require('child_process');
// console.log(cpro);

var spawn = cpro.spawn('ls'); // 第一个参数必要，而且规定有效的
// console.log(spawn);

// 这都报错？
// 模块路径
// var fork = cpro.fork('/p/a/t/h/....', [], {});
// console.log(fork);


// 进程不能被创建，不能被终止，发送数据失败
spawn.on('error', function(err) {
	console.log('error, 报错了....');
});


// code正常退出代码
// signal被终止信息
spawn.on('exit', function(code, signal) {
	// console.log(code); // 正常退出：0
	// console.log(signal); // 如果没有指定，则返回null
	console.log('exit, 退出了....');
});

// 同上
spawn.on('close', function(code, signal)  {
	console.log('close, 关闭了....');
});

// 使用disconnect触发
spawn.on('disconnect', function() {
	console.log('disconnect, 断开连接....');
});

// 是否连接
if (spawn.connected) {
	spawn.disconnect(); // 断开连接
}

// 暂不知如何使用
// spawn.stdin.write('Hello!'); // 可写流
// spawn.stdout.write('Hello'); // 可读流
// spawn.stderr; // 标准错误

// console.log(spawn.pid); // 子进程(pid)
// spawn.kill('SIGHUP'); // 报错
// spawn.send({name: 'Super'}); // 发送数据 // 报错
// fork.send({name: 'Super'}); // 发送数据 // 报错

// spawn.send('server', server); // 发送一个服务对象
// spawn.send('socket', socket); // 发送一个套接字对象

// var cprocess = cpro.spawn({name: 'Super'}); // 报错

// spawn.exec('ls', {}, function(error, stdout, stderr) {
// 	console.log('执行命令....');
// }); 


spawn.execFile('file.cmd', [], {}, function() {
	console.log('执行一个文件');
});



