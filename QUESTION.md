Study Question
====

```js
	1、http模块
	server.on('close', function() {
		console.log('服务器被关闭了....'); // 关闭服务器后不执行？
	});

	server.on('request', function(request, response) {
		console.log('trigger request event'); // 每次连接，都会执行2次？
		// connection事件同上
	});

	2、assert模块
	assert.deepEqual(深度匹配测试)、assert.notDeepEqual(非深度匹配测试) // what?
```
