function test(){
    var i = 5;
    if(1){
        var i =10;
        console.log(i);         //  1.  10
    }
    console.log(i);             //  2.  10
}

function lettest(){
    let i = 5;
    if(1){
        let i = 10;
        console.log(i);         //  4.  10

    }
    console.log(i);             //  5.  5

}

test();
console.log('--------------------------------');    //  3.  --------------------------------
lettest();