// arguments - array in JS, which
//contains all the val that we pass into a f()
//console.log(arguments);

//log the wrapper function, 
// a template, which is used by node.js
//console.log(require('module').wrapper);

//Way 1
//import add method from other file - module.exports
const C = require('./test-module-1');
const calc1 = new C();
console.log(calc1.add(2,5));

//Way 2 
//exports
//const calc2 = require('./test-module-2');
//console.log(calc2.add(2,5));
//console.log(calc2.multiply(2,5));

//result - obj with all counted properties
const { add, multiply, divide } = require('./test-module-2');
console.log(multiply(2,5));

//Caching
require('./test-module-3')(); //IIFE
require('./test-module-3')(); //IIFE
require('./test-module-3')(); //IIFE