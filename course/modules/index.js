var catIndex = require('./cat-index'),
	catPackage = require('./cat-package');

var iCat = new catIndex.createCat('iCat');
console.log(iCat.name);

var pCat = new catPackage.createCat('pCat');
console.log(pCat.name);
