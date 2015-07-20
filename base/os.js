// 操作系统
var os = require('os');
// console.log(os);

// console.log(os.tmpdir()); // 临时文件目录

// console.log(os.endianness()); // 返回CPU的字节序，可能是 “BE” 或 “LE”

// console.log(os.hostname()); // 操作系统主机名

// console.log(os.type()); // 系统名称

// console.log(os.platform()); // 系统平台

// console.log(os.arch()); // CPU架构，可能是 “x64”、“arm”、“ia32”

// console.log(os.release()); // 发行版本

// console.log(os.uptime()); // 系统运行时间(秒为单位)

// console.log(os.loadavg()); // 1，5，15分钟的平均负载数组

// console.log(os.totalmem()); // 内存总量(字节为单位)

// console.log(os.freemem()); // 空闲内存量(同上)

// console.log(os.cpus()); // CPU内核信息

// console.log(os.networkInterfaces()); // 获取网络接口的列表信息

// 系统的一行结束的标识的常量
console.log(typeof os.EOL, os.EOL.length); //2个空格的字符串
