// 路径，只对字符串操作
var path = require('path');
// console.log(path);

// “..”代表上一级，“.”代表当前
// console.log(path.normalize('/super.com/lin/ze//chao/./../super?search=baidu')); //使标准化


// 参数必须是字符串。在 v0.8 版本非字符串参数会被悄悄忽略。 在 v0.10 及以后版本将会抛出一个异常。
// console.log(path.join('/super.com/lin/ze//chao/', './../super?search=baidu'));


// 返回绝对路径
// console.log(path.resolve('super.com', 'lin', 'ze//chao', '../super'));


// 判断是否是绝对路径
// console.log(path.isAbsolute('//super/lin/ze/chao'));


// 返回一个路径到另一个路径的命令
// console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'));


// 返回路径名
// console.log(path.dirname('/foo/bar/baz/asdf/quux')); // 最后一个斜杠后会被当成文件或模块
// console.log(path.basename('/foo/bar/baz/asdf/quux.html')) // 返回最后一个文件或模块
// console.log(path.basename('/foo/bar/baz/asdf/quux.html', '.html')) // 同上
// console.log(path.basename('/foo/bar/baz/asdf/quux')) // 同上


// 返回后缀名
// console.log(path.extname('/foo/bar/baz/asdf/quux').length); // 返回空字符串
// console.log(path.extname('/foo/bar/baz/asdf/quux.')); // 返回一个小数点
// console.log(path.extname('/foo/bar/baz/asdf/quux.html')); // 返回“.html”


// 使用特定的分割符
// linux: “/”
// window: “\\”
// console.log('foo\\bar\\baz\\asdf\\quux'.split(path.sep));


// 使用特定的分割符
// linux: “:”
// window: “;”
var sPath = process.env.PATH;
console.log(sPath); // 环境变量path路径

console.log(sPath.split(path.delimiter));

