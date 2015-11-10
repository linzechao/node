/**
 * Created with JetBrains WebStorm.
 * User: Super
 * Date: 14-11-7
 * Time: 下午11:11
 * To change this template use File | Settings | File Templates.
 *
 * 不能简写
 *
 * var event = new require('events').EventEmitter();
 */
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

event.on('fun_super', function() {
    console.log('this is event....');
});

setTimeout(function() {
   event.emit('fun_super');
}, 1000);