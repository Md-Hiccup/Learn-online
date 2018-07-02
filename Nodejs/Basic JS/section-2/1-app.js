function b(){
    console.log(myVar)      //  3.  1
}

function a(){
    var myVar = 2;
    console.log(myVar)      //  2.  2
    b();
}

var myVar = 1;
console.log(myVar)          //  1.  1
a();
console.log(myVar)          //  4.  1

/* 

function a(){
    function b(){
      console.log(myVar)    //  3.  2
    }

    var myVar = 2;
    console.log(myVar)      //  2.  2
    b();
}

var myVar = 1;
console.log(myVar)          //  1.  1
a();
console.log(myVar)          //  4.  1 

*/