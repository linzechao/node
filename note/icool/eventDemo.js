var evEm = require('events').EventEmitter;
var event = new evEm();

// 注册事件
event.on('some_event', function() {
    console.log('这是一个自定义的事件');
});
// 触发事件
setTimeout(function() {
    event.emit('some_event');
}, 1000);