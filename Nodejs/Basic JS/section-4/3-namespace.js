var greet = 'Hello!';
var greet = 'Hola!';

console.log(greet);         // 1.   Hola!    { It override the greet=Hello -> greet=Hola }

var english = {};
var spanish = {};

english.greet = 'Hello!!!';
spanish.greet = 'Hola!!!';

console.log(english);        // 2.  { greet: 'Hello!!!' }
console.log(spanish);        // 3.  { greet: 'Hola!!!' }

english.greeting.greet = 'Error occured'        // undefined error 
english.greeting = {}
english.greeting.greet = 'Success'              

var french = {
    greeting: {
        basic: 'Hi'
    }
}
console.log(french)         // 4.   { greeting: { basic: 'Hi' } }