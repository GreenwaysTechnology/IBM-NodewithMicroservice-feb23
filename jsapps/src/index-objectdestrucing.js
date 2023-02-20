//object destructuring with object as output.

let getStock = () => {
    return {
        id: 1,
        symbol: 'Google',
        price: 1000,
        qty: 10
    }
}
console.log(getStock())

//object with args
getStock = (id = 0, symbol = 'google', price = 1000, qty = 10) => {
    return {
        id: id,
        symbol: symbol,
        price: price,
        qty: qty
    }
}
console.log(getStock(1, 'microsoft', 1000, 1000))

// destructuring with input parameters
getStock = (id = 0, symbol = 'google', price = 1000, qty = 10) => {
    //objectKey:localvariable
    //id:id
    //if both are same,we can make it one: we can remove any one variable
    return {
        id,
        symbol,
        price,
        qty
    }
}
console.log(getStock(1, 'microsoft', 1000, 1000))

getStock = (id = 0, symbol = 'google', price = 1000, qty = 10) => ({
        id,
        symbol,
        price,
        qty
})

console.log(getStock(1, 'microsoft', 1000, 1000))