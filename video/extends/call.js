var peo = {
	name: 'Super',
	say: function() {
		console.log(this.name + ' say hello!');
	}
};

var dog = {
	name: 'Wang Cai'
};

peo.say();
peo.say.call(dog);
