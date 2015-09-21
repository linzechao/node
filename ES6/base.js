(function () {
	'use strict';
	// 缩写function，只能有1个参数引用
	var array = [2, 4, 6, 8];
	// array.forEach(v => console.log(v)); // 有点变态
	// --------------------------------


	// 类的支持，so cool
	class SuperClass {
		// 构造器
		constructor (name) {
			this.name = name;
		}
		// 方法
		sayName () {
			console.log('My Name\'s ' + this.name);
		}
	}
	// 类的继承
	class SubClass extends SuperClass {
		constructor (name) {
			// 调用父类构造器
			super(name);
		}
		// 方法
		sayHello () {
			console.log('Hello, World. ');
		}
	}
	// 实例化
	var sup = new SuperClass('Super.'),
		sub = new SubClass('sub.');
	// 执行
	// sup.sayName();
	// sub.sayName();
	// sub.sayHello();
	// --------------------------------


	// 字面量
	var Super = {
		sup () {
			console.log('super class > sup function.');
		}
	};
	var Sub = {
		__proto__: Super, // 继承
		age: 4,
		look () {
			console.log('look mom.');
		}
	};
	// Super.sup();
	// Sub.sup();
	// Sub.look();
	// --------------------------------


	// 字符串模板，使用“反引号`”和“${}”来获取模板的值
	var tmp = 'so cool.';
	// console.log(`you is ${tmp}`);
	// --------------------------------


	// 解构，不支持？
	// var [x, y] = getVal(),
	// 	[name, , age] = ['super', '@*^&!%', '24'];
	// 方法
	function getVal () {
		return [100, 200];
	}
	// console.log(x, y);
	// console.log(name, age);
	// --------------------------------


	// 参数默认值，不支持？
	// function fun (name = 'super') {
	// 	console.log(`${name}`);
	// }
	// 不定参，不支持？
	// function add (...x) {
	// 	return x.reduce((m, n) => m + n);
	// }
	// add(1, 2, 3);
	// add(1, 2, 3, 4, 5);
	// 拓展参数，不必使用apply
	// var people = ['name', 'age', 'weight'];
	// sayMsg(...people);
	// --------------------------------


	// 常量，重新声明或定义都报错
	const PI = 3.14159;
	// 块级作用域
	for (let i = 0; i < 10; i++) {}
	// console.log(i); // undefined，报错
	// --------------------------------


	// for of值的遍历
	var array = ['s', 'u', 'p', 'e', 'r'];
	for (var e of array) {
		// console.log(e);
	}
	// --------------------------------
}());
