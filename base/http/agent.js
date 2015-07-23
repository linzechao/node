var http = require('http');

var agent = new http.Agent({keepAlive: true});

agent.request({host: '127.0.0.1:9000'}, function(response) {
	console.log('request success....');
});

agent.maxSockets = 100; // 最多每台主机上拥有agent的最大数

agent.maxFreeSockets = 100; // 最多允许最大活跃度

// 建议不要修改
agent.sockets; // 保存一个被代理使用的套接字数组对象
agent.freeSockets; // 等待用于代理的数组
agent.requests; // 保存请求队列对象


agent.destroy(); // 销毁agent中所有套接字，通常不需要使用


console.log(http.globalAgent); // 超全局的代理实例



