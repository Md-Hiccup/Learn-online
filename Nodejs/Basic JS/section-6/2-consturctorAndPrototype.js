function Person(firstname, lastname) {
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This Function in invoked.');
}

Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}


// It normally invoking the Person() but adding new, it change the 'this' and what it return.
var john = new Person('John', 'Doe');        // when 'new' is called with functn. it return the empty object property.
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);

Person.prototype.getFormalFullName = function() {
    return this.lastname + ', ' + this.firstname;
}

console.log(john.getFormalFullName())