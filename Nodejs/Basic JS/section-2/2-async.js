// long running functions
function waitThreeSeconds(){
    var ms = 3000 + new Date().getTime();
    while(new Date() < ms){
    }
    console.log('finished functions')       //  1.  After 3 seconds of Loading, it prints -> finished functions
}

function clickHandler(){
    console.log('click events')             //  3.  click events
}

// listen for the click events
document.addEventListener('click', clickHandler);

waitThreeSeconds()
console.log('finished executions')          //  2.  finished executions
