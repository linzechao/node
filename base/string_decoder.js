// 字符串解码器
var sd = require('string_decoder'); // buffer.toString一个简单接口

var decoder = sd.StringDecoder();
var euro = new Buffer([0xE2, 0x82, 0xAC]);

console.log(decoder.write(euro));

