// Functional Programming: Function that behaves like objects
// you can pass them as parameters.
// you can return them from functions.

// common mapForEach function
function mapForEach(arr, fn){
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        newArr.push(
            fn(arr[i])
        )
    };
    return newArr;
}


var arr1 = [1, 2, 3];
console.log(arr1);                              // 1. [ 1, 2, 3 ]

// normal iteration for multiplying arr1 with value 2
var arr2 = mapForEach(arr1, function(item){
    return item * 2;
})
console.log(arr2)                               // 2. [ 2, 4, 6 ]

// normal iteration for comparing arr1 with value 2
var arr3 = mapForEach(arr1, function(item){
    return item > 2;
})
console.log(arr3)                               // 3. [ false, false, true ]

// dynamically set limiter
var checkPastLimit = function(limiter, item) {
    return item > limiter;
}

var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);                              // 4. [ false, true, true ]


// more simplified the checkPastLimit function
var checkPastLimitSimplified = function(limiter){
    return function(limiter, item) {
        return item > limiter
    }.bind(this, limiter);
};

var arr5 = mapForEach(arr1, checkPastLimitSimplified(2));
console.log(arr5);                              // 5. [ false, false, true ]