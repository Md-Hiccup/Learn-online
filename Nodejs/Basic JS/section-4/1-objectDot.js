var person = new Object();              // Not a good one to use

person['firstname'] = "Tony";
person['lastname'] = 'stark';

var firstNameProperty = "firstname";

console.log(person);                    //  1.  Object: { 'firstname': 'Tony', 'lastname': 'stark'}
console.log(person[firstNameProperty]); //  2.  Tony

// Dot is a function 
console.log(person.firstname);          //  3.  Tony

person.address = new Object();

person.address.street = '111 Main Street';      // Dot operator is LEFT-associativity 
person.address.city = 'Bangalore';
person.address.state = 'KN'

console.log(person.address.street)      //  4.  111 Main Street
console.log(person.address.city)        //  5.  Bangalore
console.log(person['address']['state']) //  6.  KN

