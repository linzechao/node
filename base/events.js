var EventEmitter = require('events').EventEmitter,
	person = new EventEmitter();

// 设置0的话，不限制个数
person.setMaxListeners(11); // 设置事件监听个数最大值

// 也可以使用addListener
person.on('下班', function(who) {
	console.log(who + '提交代码');
});

person.on('下班', function(who) {
	console.log(who + '电脑关机');
});

person.on('下班', function(who) {
	console.log(who + '玩会手机');
});

person.on('下班', function(who) {
	console.log(who + '收拾东西');
});

person.on('下班', function(who) {
	console.log(who + '记得打卡');
});

person.on('下班', function(who) {
	console.log(who + '上个厕所');
});

person.on('下班', function(who) {
	console.log(who + '坐下电梯');
});

person.on('下班', function(who) {
	console.log(who + '挪出单车');
});

person.on('下班', function(who) {
	console.log(who + '买肉买菜');
});

function man(who) {
	console.log(who + '炒菜做饭');
}

person.on('下班', man);

person.on('下班', function(who) {
	console.log(who + '洗澡睡觉');
});

// 删除事件监听
person.removeListener('下班', man);
// person.removeAllListeners(); // 删除所有事件监听
// person.removeAllListeners('下班'); // 删除该事件所有监听

// var hasOffWorkListener = person.emit('下班', 'Super'); // 触发事件
// console.log(person.listeners('下班')); // 返回该事件数组
// console.log(person.listeners('下班').length); // 返回该事件条数
// 类方法，静态方法
// console.log(EventEmitter.listenerCount(person, '下班')); // 同上

// console.log('是否有下班这个监听事件：' + hasOffWorkListener);

person.once('纸巾', function(who) {
	console.log(who + '纸巾擦汗, 扔掉。');
});

/*
var hasTissue1 = person.emit('纸巾', 'Super');
var hasTissue2 = person.emit('纸巾', 'Super'); // 不在执行

console.log(hasTissue1); // true
console.log(hasTissue2); // false，执行过后删除事件
*/

console.log(person.defaultMaxListeners); // undefined??