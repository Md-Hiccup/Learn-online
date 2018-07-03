var _ = require('../underscore');

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

for(var prop in john){
    if(john.hasOwnProperty(prop)){
        console.log(prop+ ' : '+john[prop]);
    }
}

var jane = {
    address: '111 Main St.',
    getFormaFullName: function(){
        return this.lastname + ', '+ this.firstname
    }
}

var jim = {
    getFirstName : function(){
        return this.firstname
    }
}

_.extend(john, jane, jim);      // It extends the john object with both jane and jim object properties 
console.log(john)
