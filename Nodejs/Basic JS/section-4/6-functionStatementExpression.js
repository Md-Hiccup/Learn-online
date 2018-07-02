// 1.   invoking the function greet;
greet();                    // 1.   hi

// It is a greet function
// It is a Function statements
function greet(){           
    console.log('hi');      
}

// 2.   It is an anonymous function
/* It is a Function expression 
var a = function() {
    console.log('hi');
}
*/

// anonymousGreet();           // Error: undefined is not a function

var anonymousGreet = function() {
    console.log('hi');
}

anonymousGreet();           // 2.   hi

// 3.   Practicing passing int, string, object, function.. on the fly i.e on invoking
function log(a){
    console.log(a)
}

log(3);                     // 3.   3
log('hello');               // 4.   hello
log({ greeting: 'nice to meet you'});       // 5.   { greeting: 'nice to meet you' }
log(function() { console.log('hi from function on the fly' )})      // 6.   function() { console.log('hi from function' )}

// 4.   First class function: where you can pass function to other functions, 
//  use them like you do variables and invoked them.
// Practicing by Passing function on the fly to a function and then invoking the parameter
function logFun(a){
    a();
}

logFun(function() { console.log('invoked by passing funtion to a function and then execute')});

/* NOTE:
1 = function() { console.log('invoked by passing funtion to a function and then execute')}
This is a function expression and it's available because of first class function
Because functions in javascripts are objects.
*/