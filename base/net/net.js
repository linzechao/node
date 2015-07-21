// 网络服务
var net =  require('net');
// console.log(net);

// var server = net.createServer();
// console.log(server);

// server.maxConnections = 10; // 设置最大连接数，不推荐使用
// server.connections; // 已经废弃，返回当前连接数

console.log(net.isIP(123)); // 无效返回0，ip4返回4，ip6返回6

console.log(net.isIPv4(123)); // true， false

console.log(net.isIPv6(123)); // true， false

