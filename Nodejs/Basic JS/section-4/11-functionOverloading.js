function greet(firstname, lastname, language) {

    language = language || 'en';

    if (language === 'en') {
        console.log('Hello ' + firstname + ' ' + lastname);
    }
    
    if (language === 'es') {
        console.log('Hola ' + firstname + ' ' + lastname);
    }
}

//  First class Function: passing function to other function
function greetEnglish(firstname, lastname){
    greet(firstname, lastname, 'en')
}

//  First class Function: passing function to other function
function greetSpanish(firstname, lastname){
    greet(firstname, lastname, 'es')
}

greetEnglish('John', 'Doe', 'en');          // 1.   Hello John Doe
greetSpanish('John', 'Doe', 'es');          // 2.   Hola John Doe