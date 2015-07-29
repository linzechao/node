// 文件操作
var fs = require('fs');
// console.log(fs);

// 所有异步方法后面加上Sync即可换成同步方法

/*
// 异步删除一个文件
fs.unlink('./base/c.js', function (err) {
  if (err) throw err;
  console.log('successfully deleted ./base/c.js');
});
// 同步删除一个文件
fs.unlinkSync('/tmp/hello');
console.log('successfully deleted /tmp/hello');
*/

// 删除第一个文件
// 将第一个文件的内容复制到第二个文件
/*fs.rename('./base/fs/old.txt', './base/fs/new.txt', function(err) {
	if (err) {
		throw err;
	}

	// 输出该文件相关信息
	fs.stat('./base/fs/new.txt', function(err, stats) {
		if (err) {
			throw err;
		}

		console.log('stat: ' + JSON.stringify(stats));
	});
});*/

// 修改文件
// fs.ftruncate(fd, len, callback);
/*fs.truncate('./base/fs/old.txt', 10, function(err) {
	if (err) {
		throw err;
	}

	console.log('truncate function....');
});*/




