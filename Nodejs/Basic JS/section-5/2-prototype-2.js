// Explaining about the prototype of all objects, functions and array
// object, functions , array all are objects
// Objects have a prototype that point to object methods
// Functions have a prototype that point to functions methods
// Arrays have a prototype that point to array methods
var a = {};
var b = function() { };
var c = [];

console.log(a.__proto__);           // 1. Object {}
console.log(a.__proto__.__proto__); // 2. {}

console.log(b.__proto__);           // 1. function Empty() {}
console.log(b.__proto__.__proto__); // 2. {}

console.log(c.__proto__);           // 1. []
console.log(c.__proto__.__proto__); // 2. {}