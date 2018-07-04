String.prototype.isLengthGreaterThan = function(limit){
    return this.length > limit;
}

console.log('John'.isLengthGreaterThan(3));

Number.prototype.isPositive = function() {
    return this > 0
}

var a = new Number(3)
console.log(a.isPositive())


// Use Literals instead of Buil-in Fuction Constructor(like Number, String, Boolean etc)
// For Date use moment.js