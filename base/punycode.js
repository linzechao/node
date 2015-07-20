// 编码系统
var punycode = require('punycode');
// console.log(punycode);

// 将一个纯 ASCII 符号的 Punycode 字符串转换为 Unicode 符号的字符串。
// console.log(punycode.decode('super'));
// console.log(punycode.decode('林')); // 报错，只能转ASCII码


// 同上，功能对调
// console.log(punycode.encode('䬕䬝䬗'));
// console.log(punycode.encode('super')); // 不报错，但返回原字符串后加上“-”符号


// 将一个表示域名的 Punycode 字符串转换为 Unicode。只有域名中的 Punycode 部分会转换，
// 也就是说您在一个已经转换为 Unicode 的字符串上调用它也是没问题的。
// console.log(punycode.toUnicode('xn--super.com'));
// console.log(punycode.toUnicode('xn--super.com?search=super')); // xn--后面的被当做域名，后面全不管
// console.log(punycode.toUnicode('xn--maana-pta.com'));

// 同上，功能对调
// console.log(punycode.toASCII('䬕䬝䬗.com')); // xn--表示域名前缀

// console.log(punycode.version); // 当前punycode版本

// 创建一个数组，包含字符串中每个 Unicode 符号的数字编码点。由于 JavaScript 在内部使用 UCS-2，
// 该函数会按照 UTF-16 将一对代半数（UCS-2 暴露的单独的字符）转换为单独一个编码点。
console.log(punycode.ucs2.decode('super')); // 将一个字符串转换成一个数组

console.log(punycode.ucs2.encode([ 115, 117, 112, 101, 114 ])); // 将一个数组转换成一个字符串
