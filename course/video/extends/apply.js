function Peo(name) {
	this.name = name;
	this.say = function() {
		console.info(this.name + ' say hello!');
	};
}

function Dog(name) {
	// Peo.call(this, name);
	// Peo.apply(this, [name]);
	Peo.apply(this, arguments); // 个人建议别用
}

var dog = new Dog('Wang Cai');

dog.say();
