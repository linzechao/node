var assert = require('assert'); // 断言，单元测试

// assert会中断后续代码

var bVal = false, iVal = 0, sVal = 'true';

// assert.fail('实际值', '期望值', 'this is error message.', '连接符'); // 直接抛出一个错误异常

// assert(bVal, 'assert constructor.'); // 当bVal为false时，抛出异常，使用“!!bVal”
// assert.ok(bVal, 'ok function'); //同上

// assert.equal(bVal, iVal, 'equal function'); // 当比较不相等时抛出异常，使用相等“==”
// assert.notEqual(bVal, iVal, 'notEqual function'); // 当比较相等时抛出异常，使用不等“!=”

// assert.strictEqual(bVal, iVal, 'strictEqual function'); // 严格匹配，使用全等“===”
// assert.notStrictEqual(bVal, iVal, 'notStrictEqual function'); // 严格匹配，使用不全等“!==”

// assert.deepEqual(bVal, iVal, 'deepEqual function'); // 深度匹配，暂不知啥东东
// assert.notDeepEqual(bVal, iVal, 'notDeepEqual function'); // 非深度匹配，暂不知啥东东

// assert.ifError(sVal); // 当sVal为true时，抛出一个参数的检查

// 声明模块不抛出异常
/*
assert.doesNotThrow(function() {
	console.log('this is doesNotThorw function');

}, 'this is doesNotThorw function'); 
*/

assert.throws(function() {
	// console.log('this is throws function'); // 声明一个模块用于抛出异常
	throw new Error('Wrong value');

}, function(err) {
	if ((err instanceof Error) && /value/.test(err)) {
		return true;
	}

}, 'unexpected error');
