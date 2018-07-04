var a = 3;
console.log(typeof a);          // 1. number

var b = 'Hello';
console.log(typeof b);          // 2. string

var c = {};
console.log(typeof c);          // 3. object

var d = [];
console.log(typeof d);          // 4. object        ; weird
console.log(Object.prototype.toString.call(d))  // 5. [ object array ]          ;better

function Person(name) {
    this.name = name;
}

var e = new Person('Jane');
console.log(typeof e);              // 6. object
console.log(e instanceof Person);   // 7. true

console.log(typeof undefined);      // 8. undefined 
console.log(typeof null);           // 9. object        ; a bug since, like, forever

var z = function() {}
console.log(typeof z)               // 10. function
