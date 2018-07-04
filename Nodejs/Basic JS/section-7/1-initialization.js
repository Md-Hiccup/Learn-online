var people = [
    {
        // John Object 
        firstname: 'John',
        lastname: 'Doe',
        address: [
            '111 Main St.',
            '222 Main St.'
        ]
    },
    {   
        // Jane Object
        firstname: 'Jane',
        lastname: 'Doe',
        address: [
            '333 Main St.',
            '444 Main St.'
        ],
        greet: function() {
            return 'Hello '
        }
    }
]

console.log(people)                 
/* 1.
[ { firstname: 'John',
    lastname: 'Doe',
    address: [ '111 Main St.', '222 Main St.' ] },
  { firstname: 'Jane',
    lastname: 'Doe',
    address: [ '333 Main St.', '444 Main St.' ],
    greet: [Function: greet] } ]
*/ 
console.log(people[1].greet())      // 2.   Hello