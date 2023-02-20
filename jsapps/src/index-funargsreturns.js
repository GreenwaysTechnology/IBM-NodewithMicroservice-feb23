//function args and parameters
//default args
function add(x = 0, y = 0) {
    console.log(`X is ${x} Y is ${y}`)
    let z = x + y
    console.log(`The result is ${z}`)
}
add(10, 10)
add()

//how to return values
function multiply(x = 0, y = 0) {
    return x * y
}
console.log(`Multiply ${multiply(10, 10)}`)
console.log(`Multiply ${multiply()}`)