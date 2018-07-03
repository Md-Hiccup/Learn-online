var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullname: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}

//  function borrowing
var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
}

console.log(person.getFullname.apply(person2));

//  function currying: ( Creating a copy of a function but with some preset parameters )
function multiply(a, b){
    return a*b;
}

var multiplyByTwo = multiply.bind(this, 2);     // a = 2 
console.log(multiplyByTwo(4));                  // b = 4

var multiplyByThree = multiply.bind(this, 3);     // a = 2 
console.log(multiplyByThree(4));   