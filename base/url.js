var url = require('url');

var location = 'http://user:super@www.super.com:8090/family?brother=chao&age=18#about';

var json = {
	protocol: 'http:',
	slashes: true,
  	auth: 'user:super',
  	host: 'www.super.com:8090',
  	port: '8090',
  	hostname: 'www.super.com',
  	hash: '#about',
  	search: '?brother=chao&age=18',
  	query: 'brother=chao&age=18',
  	pathname: '/family',
  	path: '/family?brother=chao&age=18',
  	href: 'http://user:super@www.super.com:8090/family?brother=chao&age=18#about'
};

// console.info(url.parse(location));
// console.info(url.parse(location, true));
// console.info(url.parse(location, true, true));

// console.info(url.format(json));
// console.info(url.resolve('/one/two/three', 'four'));
// console.info(url.resolve('http://example.com/', '/one'));
// console.info(url.resolve('http://example.com/one/two/three', '/one'));
// console.info(url.resolve('http://example.com/one/two/#hash', '/one'));
// console.info(url.resolve('http://example.com/one/two/', '/one#hash'));
console.info(url.resolve('http://example.com/one/two/', '/one?name=super#hash'));
