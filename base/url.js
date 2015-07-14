var url = require('url');
var location = 'http://www.super.com:8090/family?brother=chao&age=18#about';

// console.info(url.parse(location));
// console.info(url.parse(location, true));
// console.info(url.parse(location, true, true));

console.info(url.parse(location));
