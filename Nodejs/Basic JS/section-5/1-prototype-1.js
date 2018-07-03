var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// don't do this EVER! for demo purpose only!!
john.__proto__ = person;
console.log(john.getFullName());            // 1. John Doe  

var jane = {
    firstname: 'Jane'
}
jane.__proto__ = person;
console.log(jane.getFullName());            // 2. Jane Default
