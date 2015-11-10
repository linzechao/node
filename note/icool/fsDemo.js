var fs = require('fs');
/*
fs.readFile('hello.txt', 'utf-8', function(err, data) {
    if(err) console.log('read file err');
    else console.log(data);
});
console.log('end!');// 异步
*/

var data = fs.readFileSync('hello.txt', 'utf-8');// 同步
console.log(data + '\nend!');
