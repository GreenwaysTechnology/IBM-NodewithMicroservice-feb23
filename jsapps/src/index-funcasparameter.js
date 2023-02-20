//what can be parameter to the function. 
//any literal including function : Higher order function.

function add(a = 0, b = 0) {
    return a + b;
}
console.log(add(10, 10))
let x = 10;
let y = 90;
console.log(add(x, y))

//function as parameter :HOF 

function sayHello(hai) {
    hai()
}
//passing function as parameter 
let tellMe = function () {
    console.log('Hai')
}
sayHello(tellMe)
//lnline anonmous function 
sayHello(function () {
    console.log("Hai,Inline")
})
/////////////////////////////////////////////////////////////////////////////////////
//how to pass function with args and parameters,return values

function start(server) {
    //parameter
    server('webserver')
}
start(function (name) {
    console.log(`${name} Server starts`)
})
