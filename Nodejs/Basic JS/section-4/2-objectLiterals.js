// On Comparing 1. is faster than 2.

// 1.
var person = { 
    firstname: 'Tony', 
    lastname: 'Stark',
    address: {
        street: '111 Main Street',
        city: 'Bangalore',
        state: 'KN'
    }
};

console.log(person);
/* 1.   
{ firstname: 'Tony',
  lastname: 'Stark',
  address: { street: '111 Main Street', city: 'Bangalore', state: 'KN' } } */

console.log('******************************************************************')

// 2.
var otherPerson = new Object();
otherPerson.firstname = 'Jack';
otherPerson.lastname = 'Sparrow';

otherPerson.address = new Object();
otherPerson.address.street = '111 Main Street';
otherPerson.address.city = 'Bangalore';
otherPerson.address.state = 'KN'

console.log(otherPerson)
/*  2.
{ firstname: 'Tony',
  lastname: 'Stark',
  address: { street: '111 Main Street', city: 'Bangalore', state: 'KN' } } */


function greet(per) {
    console.log(per.firstname);         
}

greet(person);              // 3.   Tony
greet({                     // 4.   Mary
    firstname: 'Jack',
    lastname: 'Sparrow'
})
