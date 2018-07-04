var arr = ['John', 'Jane', 'Doe']

console.log('------ for-in loop -------');
for (var prop in arr){
    console.log(prop + ' ' + arr[prop]);        // 0 John
                                                // 1 Jane 
                                                // 2 Doe
}

console.log('------ formal for loop -------')
for(var i=0; i<arr.length; i++){
    console.log(i + ' ' + arr[i]);
}