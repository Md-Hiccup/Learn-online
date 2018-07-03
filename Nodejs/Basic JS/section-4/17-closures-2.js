function buildFunctions() {
    var arr = [];

    for(var i = 0; i < 3; i++){
        arr.push(
            function() {
                console.log(i);
            }
        )
    }
    return arr;
}

var fs = buildFunctions();
fs[0]();                    // 1. 3
fs[1]();                    // 2. 3
fs[2]();                    // 3. 3


function buildFunctions2() {
    var arr = [];

    for(var i = 0; i < 3; i++){
        arr.push(
            (function(j) {
                return function(){
                    console.log(j);
                }
            }(i))
        )
    }
    return arr;
}

var fs2 = buildFunctions2();
fs2[0]();                    // 4. 0
fs2[1]();                    // 5. 1
fs2[2]();                    // 6. 2

// Closures Explaination:
function createCounter() {
    let counter = 5;
    const myFunction = function() {
        counter = counter + 1
        return counter
    }
    return myFunction
}
const increment = createCounter()
const c1 = increment()
const c2 = increment()
const c3 = increment()
console.log('example increment', c1, c2, c3)