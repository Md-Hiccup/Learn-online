// by value (primitives value)

var a = 3;
var b;

b = a;
a = 2;

console.log(a);     // 1.   2
console.log(b);     // 2.   3

// by reference (all objets (including functions))

var c = { greeting: 'hi'};
var d;

d = c;
c.greeting = 'hello';   // mutate

console.log(c);     // 3.   { greeting: 'hello' }
console.log(d);     // 4.   { greeting: 'hello' }

// by reference (even as parameters)

function changeGreeting(obj){
    obj.greeting = 'Hola';      // mutate   
}

changeGreeting(d);
console.log(c);     // 5.   { greeting: 'hola' }
console.log(d);     // 6.   { greeting: 'hola' }

// equals operator sets up new memory space (new address)

c = { greeting: 'howdy' };

console.log(c)
console.log(d)