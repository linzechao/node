// stdout(标准输出)是非阻塞的，而stderr(标准错误)则是阻塞的

// stdout
// console.log('log === 打印日志');
// console.log('%s ~ %d', '参数1', 2); // 带有参数的格式

// console.info('info === 打印信息');
// console.info('%s ~ %d', '参数1', 2); // 与log一致


// stderr
// console.error('error === 打印错误');
// console.error('%s ~ %d', '参数1', 2); // 与log一致, 但是输入到stderr

// console.warn('warn === 打印警告');
// console.warn('%s ~ %d', '参数1', 2); // 与error一致

// console.dir("字符串相加" + 'dir === 格式化打印'); // 忽略所有格式，直接输入，这里字符串单引号也输出
// console.dir('%s ~ %d', '参数1', 2); // 无效
// console.dir(2);

/*
console.time('100-elements');

var a = [], i = 0;
for (; i < 10000; i++) {a.push(i);}

console.timeEnd('100-elements');
*/

// console.trace('trace === 打印追踪');
// console.trace('trace === 打印追踪%d', 4); // so cool

// console.assert(false, '当第一个参数为false时，该信息被输出！'); // 与assert.ok()一致(stderr)
console.assert(false, 'why?'); // 与assert.ok()一致