var array1 = new Array();      // creating array using Array object
// or 
var arrray1 = [1, 2, 3];               // creating array using array object literal syntax

var arr = [
    1,
    false,
    {
        name: 'Tony',
        address: '111 Main St.'
    },
    function(name) {
        var greeting = 'Hello ';
        console.log(greeting + name)
    },
    "hello"
];

console.log(arr);               // 3.  [ 1, false, Object{} , Function[], 'hello' ] 
arr[3](arr[2]['name'])          // 4. Hello Tony 
arr[3](arr[2].name)             // 4. Hello Tony