// Polyfill ( code that adds a feature which the engine may lack)
if(!Object.create) {
    Object.create = function(o){
        if(this.arguments.length > 1){
            throw new Error ( 'Object.create implementation' +
            'only accepts the first parameter.');
        }
        function F() {}
        F.prototype = o;
        return new F();
    };
}


var person = {
    firstname: 'Default', 
    lastname: 'Default',
    greet: function() {
        return 'Hi '+ this.firstname;
    }
}

// Pure Prototypal Functions
// Object.create can create an empty object
// use that objects as the prototype for other objects.

var john = Object.create(person);
console.log(john)           // {}
john.firstname = 'John';
john.lastname = 'Doe';
console.log(john);          // { firstname: 'john', lastname: 'Doe}
console.log(john.greet());  // Hi John