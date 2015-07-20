学习Node
====

```js
	/* 进度*/
	1、console(控制器 == 冻结) // 100%
	2、url(URL解析 == 稳定) // 100%
	3、querystring(格式字符串 == 稳定) // 100%
	4、events(事件 == 冻结) // 100%
	5、assert(断言 == 锁定) // 100%
	6、global(全局对象 == 冇) // 100%
	7、timer(定时器 == 锁定) // 100%
	8、Punycode(编码系统 == 不稳定) // 100%
	-、string_decoder(字符串解码器 == 稳定) // 60%
	-、http(Http服务 == 稳定) // 4%
```

要点
----

1、可以使用环境变量来配置模块搜索路径
```js
	NODE_PATH=/home/user/lib;/home/lib
```

2、定时器
```js
	// setTimeout，setInterval会影响前面的unref()方法执行
```
