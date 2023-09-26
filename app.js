const helpers = require("./helpers");
//object destructing i.e. like importing a function from a class rather than whole class. Line 1 imports whole helpers.js but line 3  imports a method only.
const {diff, mult} = require("./helpers");


console.log("Sum Total: " + helpers.sum(10,1));
console.log("Difference Total: " + diff(10,1));
console.log("Product Total: " + mult(10,5));
