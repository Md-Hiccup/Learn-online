function greet(firstname, lastname, language){

    language = language || 'en';    // If language is undefined

    if (arguments.length === 0) {
        console.log('Missing parameters');
        console.log('--------------');
        return ;
    }

    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments);         // It containg the list of all the value that the paramets is passed
    console.log('args: 0- ', arguments[0]);
    console.log('-----------');

}

greet();                    // 1.   undefined   []
greet('John');              // 2.   John        ["John"]        args: 0- John
greet('John', 'Doe');       // 3.   John Doe    ["John", "Doe"]     args: 0- John
greet('John', 'Doe', 'es'); // 4.   John Doe es ["John", "Doe", "es"]  args: 0- John
