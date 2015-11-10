/**
 * Created with JetBrains WebStorm.
 * User: Super
 * Date: 14-11-7
 * Time: 下午11:24
 * To change this template use File | Settings | File Templates.
 */
var myModule = require('./module');
var a = new myModule();
a.setName('Super Chao');
var b = new myModule();
b.setName('Chao Super');
a.sayHello();
b.sayHello();
