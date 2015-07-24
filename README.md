Study Node
----

#### Progress
```js
	1、console(控制器 == 冻结) // 100%
	2、url(URL解析 == 稳定) // 100%
	3、querystring(格式字符串 == 稳定) // 100%
	4、events(事件 == 冻结) // 100%
	5、assert(断言 == 锁定) // 100%
	6、global(全局对象 == 冇) // 100%
	7、timer(定时器 == 锁定) // 100%
	8、Punycode(编码系统 == 不稳定) // 100%
	9、modules(模块 == 锁定) // 100%
	10、path(路径 == 稳定) // 100%
	11、dns(DNS服务 == 稳定) // 100%
	12、os(操作系统 == 冻结) // 100%
	13、util(实用工具 == 冻结) // 100%
	14、samlloc(Smalloc模块 == 实验) // 100%
	15、vm(虚拟机 == 稳定) // 100%
	16、buffer(缓冲 == 稳定) // 100%
	17、string_decoder(字符串解码器 == 稳定) // 前提：buffer模块 100%
	18、repl(命令行 == 稳定) // 100%
	19、net(网络 == 稳定) // 100%
	20、process(进程 == 冇) // 100%
	21、child_process(子进程 == 稳定) // 100%
	22、http(Http服务 == 稳定) // 100%
	23、tls(TLS/SSL服务 == 稳定) // 100%
	24、https(HTTPS服务 == 稳定) // 前提：TLS/SSL模块 100%
	-、dgram(UDP == 稳定) // 0%
	-、debugger(调试器 == 稳定) // 0%
	-、fs(文件系统 == 稳定) // 0%
	-、readline(逐行读取 == 不稳定) // 0%
	-、stream(流 == 不稳定) // 0%
	-、tty(终端 == 不稳定) // 0%
	-、cluster(集群模块 == 实验性) // 前提：process模块 0%
	-、domain(域 == 不稳定) //前提：集群模块 4%
	-、zlib(压缩 == 稳定) // 0%
	-、crypto(加密 == 不稳定) // 0%
	-、c(C/C++模块 == 冇) // 0%
	总：35
```

#### PS
1、可以使用环境变量来配置模块搜索路径
```js
	NODE_PATH=/home/user/lib;/home/lib
```

2、定时器
```js
	setTimeout，setInterval会影响前面的unref()方法执行
```

3、字符串长度
```js
	当用户在写http响应头Cotent-Length的时候，千万记得一定要用 Buffer.byteLength 方法，
	不要使用 String.prototype.length
```

4、buffer.INSPECT_MAX_BYTES
```js
	使用require引入模块，才可使用
```

5、在命令行中
```js
	输入.exit可退出命令行环境
	输入.clear可清除命令行文本
```
