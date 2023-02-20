//function is a literal : function is value
//since function is value, can be assigned to a variable.

//declare function 
function sayHello() {
    console.log('Hello')
}
//how to invoke the above function 
//invoke directly 
sayHello()
//assign function into a variable and can be called.
let hello = sayHello;
hello();
//anonmous function 
let hai = function () {
    console.log('Hai');
}
hai();
let add = function (a = 0, b = 0) {
    return a + b
}
let result = add(10,10)
console.log(`The result is ${result}`)