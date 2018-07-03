// closures concept
var bar = {};
function foo() {

    bar.a = 'Set from foo()';
    Object.prototype.b = 'Set from prototype';

    return function inner() {
        console.log(bar.a);
    }

}
foo()(); // 'Set from foo()'
console.log(bar)

// Checking 'this' 
console.log('outer this',this)                      // Window Object
var chk = {
    name : 'Checking this',
    log : function(){
        console.log('innner this: ', this)          // { name: 'checking this', log: fn() }
        var setFn = function(name) {
            console.log(name,' ',  this);           // Window Object
        }
        setFn('Update the log');
    }
}

chk.log();
