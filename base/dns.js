// DNS服务
var dns = require('dns');
// console.log(dns);

/*
// 'baidu.com', 4 | 6, callback
dns.lookup('baidu.com', 4, function(err, addr, family) { // 不支持6时，限制6报错
	console.log(err); // 不报错时为null
	console.log(addr); // IP地址(报错时undefined)
	console.log(family); // 4或者6(报错时undefined)
});
*/


/*
有效 rrtypes 取值有 
'A'（IPv4 地址，缺省）、
'AAAA'（IPv6 地址）、
'MX'（邮件交换记录）、
'TXT'（文本记录）、
'SRV'（SRV 记录）、
'PTR'（用于 IP 反向查找）、
'NS'（域名服务器记录）、
'CNAME'（别名记录）。
dns.resolve('baidu.com', 'MX', function(err, addr) {
	console.log(err); // 同上
	console.log(addr);
});
*/


/*
方法同上，只适用于rrtypes为'A';
dns.resolve4('baidu.com', function(err, addr) {
	console.log(err); // 同上
	console.log(addr);
});
*/


/*
方法同上，只适用于rrtypes为'AAAA';
dns.resolve6('baidu.com', function(err, addr) {
	console.log(err); // 同上
	console.log(addr);
});
*/


/*
方法同上，只适用于rrtypes为'MX';
dns.resolveMx('baidu.com', function(err, addr) {
	console.log(err); // 同上
	console.log(addr);
});
*/


/*
方法同上，只适用于rrtypes为'TXT';
dns.resolveTxt('baidu.com', function(err, addr) {
	console.log(err); // 同上
	console.log(addr);
});
*/


/*
方法同上，只适用于rrtypes为'SRV';
dns.resolveSrv('baidu.com', function(err, addr) {
	console.log(err); // 同上
	console.log(addr);
});
*/

/*
方法同上，只适用于rrtypes为'NS';
dns.resolveNs('baidu.com', function(err, addr) {
	console.log(err); // 同上
	console.log(addr);
});
*/


/*
方法同上，只适用于rrtypes为'CNAME';
dns.resolveCname('baidu.com', function(err, addr) {
	console.log(err); // 同上
	console.log(addr);
});
*/


/*
反向解析
dns.reverse('220.181.57.217', function(err, domains) { // 报错
	console.log(err); // 同上
	console.log(domains);
});
*/

console.log(dns.getServers());
console.log(dns.getServers('220.181.57.217'));


// 错误代码
/*
dns.NODATA: DNS 服务器返回无数据应答。
dns.FORMERR: DNS 声称查询格式错误。
dns.SERVFAIL: DNS 服务器返回一般失败。
dns.NOTFOUND: 域名未找到。
dns.NOTIMP: DNS 服务器未实现所请求操作。
dns.REFUSED: DNS 服务器拒绝查询。
dns.BADQUERY: DNS 查询格式错误。
dns.BADNAME: 域名格式错误。
dns.BADFAMILY: 不支持的地址类型。
dns.BADRESP: DNS 答复格式错误。
dns.CONNREFUSED: 无法联系 DNS 服务器。
dns.TIMEOUT: 联系 DNS 服务器超时。
dns.EOF: 文件末端。
dns.FILE: 读取文件错误。
dns.NOMEM: 超出内存。
dns.DESTRUCTION: 通道正在被销毁。
dns.BADSTR: 字符串格式错误。
dns.BADFLAGS: 指定了非法标记。
dns.NONAME: 所给主机名非数字。
dns.BADHINTS: 指定了非法提示标记。
dns.NOTINITIALIZED: c-ares 库初始化尚未进行。
dns.LOADIPHLPAPI: 加载 iphlpapi.dll 出错。
dns.ADDRGETNETWORKPARAMS: 无法找到 GetNetworkParams 函数。
dns.CANCELLED: DNS 查询取消。
*/
