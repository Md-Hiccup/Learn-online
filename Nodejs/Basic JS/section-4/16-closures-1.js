function greet(whattosay) {
    return function (name){
        console.log( whattosay + ' ' + name);
    }
}

greet('Hi')('Tony');        // 1.   Hi Tony

var sayHi = greet('Hi');
sayHi('Tonyy..');           // 2.   Hi Tonyy..