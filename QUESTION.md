Study Question
----

#### Point
```js
	node version: v0.10.26
```

#### Question
1、http模块
```js
	server.on('close', function() {
		console.log('服务器被关闭了....'); // 关闭服务器后不执行？
	});
	server.on('request', function(request, response) {
		console.log('trigger request event'); // 每次连接，都会执行2次？
		// connection事件同上
	});
```

2、assert模块
```js
	assert.deepEqual(深度匹配测试)、assert.notDeepEqual(非深度匹配测试) // what?
```

3、path模块
```js
	path.isAbsolute(); // 报错
```

4、dns模块
```js
	reverse、getServers报错
	// console.log(dns.getServers());
	// console.log(dns.getServers('220.181.57.217'));
```

5、util模块
```js
	// 不起效果
	util.inspect.styles = 'string';
	util.inspect.colors = 'blue';
```

6、smalloc模块
```js
	smalloc.copyOnto(); // 参数api不详
```

7、vm模块
```js
	vm.isContext(sandbox); // 报错
```

8、string_decoder模块
```js
	api中decoder冇write和end方法
```
