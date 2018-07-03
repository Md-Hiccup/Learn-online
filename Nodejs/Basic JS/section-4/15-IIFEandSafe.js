var greeting = "Hola ";

// 1.  IIFE
(function greet(name){
    var greeting = 'Hello ';
    console.log(greeting + name);       // 1.   Hello John

})('John');     // IIFE

console.log(greeting);                  // 2.   Hola


// 2.   IIFE
(function greet( global, name){
    var greeting = 'hello ';
    global.greeting = "hello ";          // override the 'global' object 'greeting' variable from 'Hola' to 'Hello' 
    console.log(greeting + name);

}(window, 'john'));                 // NOTE: window is not working on node so open in the browser for checking the code

console.log(greeting)