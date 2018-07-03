function makeGreeting(language) {
    return function(firstname, lastname){
        if(language === 'en') {
            console.log('Hello '+firstname+ ' '+lastname);
        }

        if(language === 'es'){
            console.log('Hola ' +firstname+ ' '+lastname);
        }
    }
}

var greetEnglish = makeGreeting('en');  // It has one closures
var greetSpanish = makeGreeting('es');  // It has different closures

greetEnglish('John', 'Doe');
greetSpanish('john', 'doe');