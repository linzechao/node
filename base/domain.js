var domain = require('domain');
// console.log(domain);

var d = domain.create();
d.on('error', function(er) {
  console.error('Caught error!', er);
});

d.run(function() {
  process.nextTick(function() {
    setTimeout(function() { // 模拟几个不同的异步的东西
      fs.open('non-existent file', 'r', function(er, fd) {
        if (er) throw er;
        // 继续。。。
      });
    }, 100);
  });
});

