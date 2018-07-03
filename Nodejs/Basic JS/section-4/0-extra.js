var bar = {};

function foo() {

    bar.a = 'Set from foo()';
    Object.prototype.b = 'Set from prototype';

    return function inner() {
        alert(bar.a);
    }

}

foo()(); // 'Set from foo()'
console.log(bar)