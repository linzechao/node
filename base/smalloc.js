// Smalloc
var smalloc = require('smalloc'); // 还是需要引入的
// console.log(smalloc);

var obj = {name: 'Super', age: 24};
// console.log(smalloc.alloc(10, {name: 'Super', age: 24, '0': 'index'})); // 覆盖掉下表0的值
smalloc.alloc(10, obj);
// console.log(obj);
// {'0': 22, name: 'Super', age: 24}

smalloc.dispose(obj); // 恢复原来毛样
// console.log(obj);


/*
source 分配了外部数组的来源对象
sourceStart 从这个位置开始拷贝
dest 分配了外部数组的目标对象
destStart 拷贝到这个位置
copyLength 拷贝的长度
smalloc.copyOnto(source, sourceStart, dest, destStart, copyLength);
*/
smalloc.copyOnto({sex: 'Man', like: 'JavaScript'}, 0, obj, 1, 2); // what?
console.log(obj);


// console.log(smalloc.kMaxLength); // 最大分配值
// console.log(smalloc.Types); // 外部数组类型

