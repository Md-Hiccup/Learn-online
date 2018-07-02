console.log(Number(undefined))      //	1.	Nan 
console.log(Number(null))           //	2.	0
console.log(Number(false))			//	3.	0
console.log(Number(""))				// 	4.	0

var a = 0;
var c;
var b = false;

if ( a === b) {		//	False
	console.log("Equal: Cuz it coerced the variable a and b then it compares");
} else {
	console.log("Not Equal: It doesn't coerced, so it checks the type of a variable and then compare");		//	5.	
}

if (c){				//	false
	console.log('c have some value', c)
} else {
	console.log('c is undefined')	//	6.	c is undefined	
}
