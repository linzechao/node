var cluster = require('cluster'),
	http = require('http');
// console.log(cluster);

cluster.on('exit', function(worker, code, signal) {
  console.log('worker ' + worker.process.pid + ' died');
});

if (cluster.isMaster) {
  cluster.fork();
  cluster.fork();
  console.log('master pid:' + process.pid);
  
} else {
  // Workers can share any TCP connection
  // In this case its a HTTP server
  http.createServer(function(req, res) {
    res.writeHead(200);
    res.end("hello world\n");
  }).listen(8000);

  console.log('child pid:' + process.pid);
}

