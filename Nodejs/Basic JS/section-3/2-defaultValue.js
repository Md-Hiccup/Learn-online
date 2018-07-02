console.log(undefined || "hello")       //  1.  hello
console.log(null || "hello")            //  2.  hello
console.log( "" || "hello")             //  3.  hello

function greet(name){
    name = name || "<Your name here>"
    console.log('Hello '+ name);        
}

greet();        //  4.  Hello undefined ( if line 6 is missing ) other wise -> Hello <Your name here>
greet('John');  //  5.  Hello John
greet(0);       //  6.  Hello <Your name here>