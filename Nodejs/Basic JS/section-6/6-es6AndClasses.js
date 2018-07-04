class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet() {
        return 'Hi ' + this.firstname;
    }
}

class InformalPerson extends Person {
    constructor(firstname, lastname){
        super(firstname, lastname)
    }
    greet() {
        return 'Yo ' + this.firstname;
    }
}

var person2 = new Person('Jack') 
console.log(person2.greet())            // 1.   Hi Jack

var person1 = new InformalPerson('John');
console.log(person1.greet());           // 2.   Yo John