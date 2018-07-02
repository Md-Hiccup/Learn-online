var objectLiteral = {
    firstname : 'Jack',
    isAProgrammer : true
}
// stringify convert Javascript object into JSON Object
console.log(JSON.stringify(objectLiteral))      // 1.   {"firstname":"Jack","isAProgrammer":true}

// parse converts the JSON object into Javascript Object
var jsonValue = JSON.parse('{ "firstname" : "Tony", "isAProgrammer": true }')

console.log(jsonValue)          // 2.   Object: { firstname: 'Tony', isAProgrammer: true }

