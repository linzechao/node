#### Study Question

#### Point
> node version: v0.10.26

#### Question
> 1、http模块
``` js
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
> 2、assert模块
``` js
// what?
assert.deepEqual(深度匹配测试);
assert.notDeepEqual(非深度匹配测试);
```
> 3、path模块
``` js
// 报错
path.isAbsolute();
```
> 4、dns模块
``` js
// reverse、getServers报错
console.log(dns.getServers());
console.log(dns.getServers('220.181.57.217'));
```
> 5、util模块
``` js
// 不起效果
util.inspect.styles = 'string';
util.inspect.colors = 'blue';
```
> 6、smalloc模块
``` js
// 参数api不详
smalloc.copyOnto();
```
> 7、vm模块
``` js
// 报错
vm.isContext(sandbox);
```
> 8、string_decoder模块
``` js
// api中decoder冇write和end方法
```
> 9、repl模块
``` js
// .clear指令没效果，没清除，也没触发reset方法
// _下划线无效
```
> 10、child_process模块
``` js
// 报错
创建spawn、fork报错
spawn.kill('SIGHUP');
spawn.send({name: 'Super'});
fork.kill('SIGHUP');
fork..send({name: 'Super'});
```
