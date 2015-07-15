var qs = require('querystring');

var json = {
	name: 'super',
	age: 18,
	like: ['JavaScript', 'Node'],
	form: ''
};

var u_1 = 'name=super&age=18&like=JavaScript&like=Node&form=';
var u_2 = 'name=super~age=18~like=JavaScript~like=Node~form=';
var u_3 = 'name:super,age:18,like:JavaScript,like:Node,form:';

// console.log(qs.stringify(json)); // 序列化成字符串
// console.log(qs.stringify(json, '~'));
// console.log(qs.stringify(json, ',', ':'));

// console.log(qs.parse(u_1)); // 反序列化成对象
// console.log(qs.parse(u_2, '~'));
// console.log(qs.parse(u_3, ',', ':'));

console.log(qs.escape('林泽超')); // 转义，与decode一样
console.log(qs.unescape('%E6%9E%97%E6%B3%BD%E8%B6%85'));
