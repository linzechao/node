Study Question
----

#### Point
```js
	node version: v0.10.26
```

#### Question
1、http模块
```js
	// 关闭服务器后不执行？
	server.on('close', function() {
		console.log('服务器被关闭了....');
	});
	// 每次连接，都会执行2次？
	server.on('request', function(request, response) {
		console.log('trigger request event');
		// connection事件同上
	});
```

2、assert模块
```js
	// what?
	assert.deepEqual(深度匹配测试);
	assert.notDeepEqual(非深度匹配测试);
```

3、path模块
```js
	// 报错
	path.isAbsolute();
```

4、dns模块
```js
	// reverse、getServers报错
	console.log(dns.getServers());
	console.log(dns.getServers('220.181.57.217'));
```

5、util模块
```js
	// 不起效果
	util.inspect.styles = 'string';
	util.inspect.colors = 'blue';
```

6、smalloc模块
```js
	// 参数api不详
	smalloc.copyOnto();
```

7、vm模块
```js
	// 报错
	vm.isContext(sandbox);
```

8、string_decoder模块
```js
	// api中decoder冇write和end方法
```
