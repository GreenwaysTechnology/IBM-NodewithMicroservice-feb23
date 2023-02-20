//arrow functions syntaxs

//basic syntax: if arrow function has only one line of code ,we can remove {}

let greet = () => {
    console.log('Hello')
}
greet()
//without {}
greet = () => console.log('Hello')
greet()

//parameters
let add = (a = 0, b = 0) => {
    let c = a + b
    console.log(`C ${c}`)
}
add(10, 10)
//how to return values : only return statement
add = (a = 0, b = 0) => {
    return a + b;
}
console.log(add(10, 10))

//if function body has only return statement,we can remove {} and returnstatement
add = (a = 0, b = 0) => a + b;

console.log(add(10, 10))

//single arg value , no default value, and return the same 

let getValue = (a) => {
    return a;
}
console.log(getValue(10))
//if single variable ,no default value: we can remove () 
getValue = a => a
console.log(getValue(10))