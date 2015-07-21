// 缓冲，不需要使用require引入
// 类似一个整数数组
// 大小不可变
// console.log(Buffer);

// var buf = new Buffer(4); // 大小为4的8位字节
// var buf = new Buffer([4, 8, 10, 16]); // 8位字节的数组
var buf = new Buffer('Super'); // 带有字符串的8位字节
var bufu = new Buffer('Chao');
var chao = new Buffer('超');
var json = new Buffer('{"name": "Super"}');
// console.log(buf);

// console.log(Buffer.isEncoding('utf8')); // true，编码方式

// console.log(Buffer.isBuffer(buf)); // true，是否为Buffer对象

// console.log(Buffer.byteLength('超')); // 返回Number类型的字符串字节(byte)长度

// console.log(Buffer.concat([buf, bufu], 8).toString()); // SuperCha 少了个o，长度不对

// console.log(chao.length); // 返回长度，与Buffer.byteLength一致

// console.log(buf.write('Chao', 0, 1)); // 返回写入的长度
// console.log(buf.toString());
// console.log(buf.toString().length);

// console.log(buf.toString('utf8', 1, 4)); // 返回指定编码的字符串

// 返回JSON
// console.log(json.toJSON()); // 返回一个JSON的Buffer实例

// console.log(buf[0]); // 返回一个16进制

// console.log(buf.copy(bufu, 0, 0, 1)); // 返回拷贝的长度
// console.log(bufu.toString());

// console.log(buf.slice(0, 3).toString()); // 切片

// 位数不够，报错
// console.log(buf.readUInt8(0));
// console.log(buf.readUInt16LE(0));
// console.log(buf.readUInt16BE(0));
// console.log(buf.readUInt32LE(0));
// console.log(buf.readUInt32BE(0));

// console.log('-------------------');

// console.log(buf.readInt8(0));
// console.log(buf.readInt16LE(0));
// console.log(buf.readInt16BE(0));
// console.log(buf.readInt32LE(0));
// console.log(buf.readInt32BE(0));

// console.log('-------------------');

// console.log(buf.readFloatLE(0));
// console.log(buf.readFloatBE(0));

// console.log('-------------------');

// console.log(buf.readDoubleLE(0));
// console.log(buf.readDoubleBE(0));

// buf.writeUInt8(88, 0); // 写入

// buf.writeUInt16LE(67, 2);
// buf.writeUInt16BE(65, 3);

// buf.writeInt8(64, 3);

// buf.writeInt16LE(67, 2);
// buf.writeInt16BE(67, 2);

// buf.writeInt32LE(67, 0);
// buf.writeInt32BE(67, 0);

// buf.writeFloatLE(64, 0);
// buf.writeFloatBE(62, 0);

// buf.writeDoubleLE(62, 0);
// buf.writeDoubleBE(62, 0);
// console.log(buf.toString());

buf.fill('S', 3); // 直接填充
// console.log(buf.toString());

// 存在require('buffer')中
console.log(buf.INSPECT_MAX_BYTES);


// 慎用，观察调试使用
var sb = new SlowBuffer(10);
