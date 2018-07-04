var q = $('ul.people li');
console.log(q)

// Method Chaining: calling one method after another, and each method affects the parent object.
// so obj.method1().method2() where both methods end up with a 'this' variable pointing at 'obj'.
var q1 = $('ul.people').addClass('newclass').removeClass('people');
console.log(q1);
 