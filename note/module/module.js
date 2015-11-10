/**
 * Created with JetBrains WebStorm.
 * User: Super
 * Date: 14-11-7
 * Time: 下午11:23
 * To change this template use File | Settings | File Templates.
 */

function Hello() {
    var name = 'is default name';
    this.setName = function(thyName) {
        name = thyName;
    }

    this.sayHello = function() {
        console.log('Hello, ', name);
    }
}

module.exports = Hello;
