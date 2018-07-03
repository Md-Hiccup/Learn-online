// Using underscore.js 
var _ = require('../underscore');

var arr6 = _.map([1, 2, 3], function(item) {
    return item * 3
});
console.log(arr6)               // 1. [3, 6, 9]

var arr7 = _.filter([2, 3, 4, 5, 6, 7], function(item){
    return item %2 === 0
});
console.log(arr7)               // 2. [2, 4, 6]