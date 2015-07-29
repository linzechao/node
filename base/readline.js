var readline = require('readline');
// console.log(readline);

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt('>>'); // 设置一个命令行提示符
rl.prompt(0); // 换行
rl.prompt(1); // 无效
rl.prompt('is prompt'); // 无效

// 输出query，表示提出疑问
rl.question('query', function(answer){
	console.log('question function....', answer);
});

rl.pause(); // 暂停
rl.resume(); // 恢复

// 使用快捷方式写入
rl.write('Delete me!');
rl.write(null, {ctrl: true, name: 'u'});

rl.on('line', function(cmd) {
	console.log('line function....');
});

rl.on('pause', function() {
	console.log('暂停被触发....');
});

rl.on('resume', function() {
	console.log('恢复被触发....');
});

// 使用readline模块后，最后一定要关闭
rl.close();
