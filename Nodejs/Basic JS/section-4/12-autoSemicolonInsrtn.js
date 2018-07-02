function getPerson() {
    return 
    {
        firsname: 'Tony'
    }
}
console.log(getPerson());       // undefined bcuz auto semicolon insertion insert the ; after return carriage return.

function getPersonName() {
    return {
        firsname: 'Tony'
    }
}
console.log(getPersonName());   //  { firsname: 'Tony' }
