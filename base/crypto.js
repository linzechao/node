var crypto = require('crypto');
// console.log(crypto);

// 返回一个数组，包含支持的加密算法的名字。
var ciphers = crypto.getCiphers();
// console.log(ciphers);

// 返回一个包含所支持的哈希算法的数组。
var hashes = crypto.getHashes();
// console.log(hashes);

// 创建一个加密凭证对象
var details = crypto.createCredentials({
	pfx: ''
});
console.log(details);


