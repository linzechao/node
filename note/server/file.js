/**
 * Created with JetBrains WebStorm.
 * User: Super
 * Date: 14-11-7
 * Time: 下午10:57
 * To change this template use File | Settings | File Templates.
 */
var fs = require('fs');
console.log('start....');
fs.readFile('super.txt', 'utf-8', function(error, data) {
    if (error)
        console.log(error);
    else
        console.log(data);
});
console.log('end....');
