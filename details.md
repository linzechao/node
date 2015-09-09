#### repl命令行环境
> 1、下划线_
``` js
// 表示上一个操作符
a = 4;
_ += 4; // 8
```
> 2、退出编辑.break
``` js
// 可以跳出函数编辑界面
// 也可以不继续编写跳出
.break // 或使用键盘按键Ctrl+C一次
```
> 3、清除变量与函数.celar
``` js
// 清除掉前面缓冲的所有变量与函数
// 后面再进行操作，那么就是null值
.clear // 也有.break功能，跳出函数编辑
```
> 4、退出.exit
``` js
// 退出node REPL环境
.exit // Ctrl+D
```
> 5、帮助.hlep
>
> 6、保存到文件.save
``` js
.save ../save.js
```
> 7、加载.load
``` js
// 将文件中的函数与变量加载到环境中
.load ../save.js
```


#### console控制台
> 1、重定向标准输出流
``` js
// log.js
console.log('输出一个日志。');

// 保存到info.log文件中，以标准输出方式
node log.js 1>info.log
```
> 2、重定向标准错误输出流
``` js
// err.js
console.error('这是一个报错！');

// 保存到info.log文件中，以标准错误输出流
node err.js 1>error.log
```

