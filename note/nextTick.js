function compute() {
	console.log("i am is compute method!");
}

function somethingComplited(args) {
	console.log("i am is somethingComplited method!");
	console.log(args);
}
/*
function doSomething(args, callback) {
	somethingComplited(args);
	callback();
}*/


function doSomething(args, callback) {
	somethingComplited(args);
	process.nextTick(callback);
}
for (var i = 0; i < 100; i ++) 
	doSomething("linzechao44", function() {
		compute();
	});