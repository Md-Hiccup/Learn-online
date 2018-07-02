console.log(this);      // 1.   Window Object  ( call Global object )

function a() {
    console.log(this);  
    this.newVariable = 'hello';
}


var b = function() {
    console.log(this);  
}

a();        // 2.   Window Object
console.log(newVariable);   // 4.   hello
b();        // 3.   Window Object


var c = {
    name: 'The c object',
    log: function() {

        var self = this;        //  self or this is pointing to the whold log function or log function object

        self.name = 'Updated c object';
        console.log(self);      

        // comment it from 25-29 when checking line 33 and  34
        var setname = function (newname){
            self.name = newname;
        }
        setname('Updated again! The c object');
        console.log(self);
    }
}

// c.log();    // 4.   { name : 'The c object', log: function }; if line 21 is commented
// c.log();    // 5.   { name : 'Updated c object', log: function };   if line 21 is there

c.log();
// 6.   { name : 'Updated c object', log: function }; IT is not changing by setname('Updated again! The c object')
// because now, 'this' points to global object so , it created a 'name' variable globally
// For fixing this issue use ' var self = this;'

