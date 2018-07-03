var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullname: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}

// Type 1. of bind()
console.log('--------bind()---------')
var logName1 = function(lang1, lang2){
    console.log('Logged 1: ', this.getFullname(), lang1, ' ', lang2);
}.bind(person, 'en', 'es');

var logName2 = function(lang1, lang2){
    console.log('Logged 2: ', this.getFullname(), lang1, ' ', lang2);
}

var logPersonName1 = logName1;                   //
var logPersonName2 = logName2.bind(person, 'en', 'es')      //

logPersonName1();
logPersonName2();

console.log('--------call()---------')
logName2.call(person, 'cen', 'ces');

console.log('--------apply()---------')
logName2.apply(person, ['aen', 'aes']);

console.log('-------IIFE with apply()---------');
(function(lang1, lang2){
    console.log('Logged 2: ', this.getFullname(), lang1, ' ', lang2);
}).apply(person, ['den', 'des'])