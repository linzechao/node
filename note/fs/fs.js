var fs = require('fs');

fs.readFile('context.txt', function(err, data) {
	if (err) 
		console.log('err:', err);
	else 
		console.log('data:', data);
});

fs.readFile('context.txt', 'utf-8', function(err, data) {
	if (err)
		console.log('err:', err);
	else
		console.log('data:', data);
});

try {
	var data = fs.readFileSync('context.txt', 'utf-8');
	console.log('sync data:', data);
} catch(e) {
	console.log('sync err:', e);
}