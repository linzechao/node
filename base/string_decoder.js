// 字符串解码器
var sd = require('string_decoder'); // buffer.toString一个简单接口

var decoder = new sd.StringDecoder();
var buf = new Buffer('Super');

// console.log(sd);
console.log(decoder);
// console.log(buf);
// console.log(buf.toString());

// console.log(decoder.write(buf));

