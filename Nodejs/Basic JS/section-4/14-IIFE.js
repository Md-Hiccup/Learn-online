//  Immediately Invoked Function Expressions

// Function statement
function greet(name){
    console.log('Hello ' + name);
};
greet('John');

// using Function Expressions
var greetFunc = function(name) {
    console.log('Hello ' + name);
};
greetFunc('John');

// using an Immediately Invoked Function Expression (IIFE)
var greeting = function(name) {

    return 'Hello ' + name;

}('John');        // () it invoked immediately

console.log(greeting);      // it just invoked the function

// grouping operator
(3+4)*2;

// Anything inside '()' parenthesis is an expressions
(function(name){

    var greeting = 'Inside IIFE: Hello ';
    console.log(greeting + name);

}('Tony'));     // IIFE

