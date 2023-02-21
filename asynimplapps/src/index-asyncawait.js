

//async function 
// async function getValue() {
//     //return Promise.resolve(10)
//     return 10  //by default async functions return promise
// }
// function getValue() {
//     return Promise.resolve(10)
// }
function getValue() {
    let value = 10
    if (value === 10) {
        return Promise.resolve(10)
    } else {
        return Promise.reject(0)
    }
}

async function main() {
    try {
        const value = await getValue();
        console.log(value)
    }
    catch (err) {
        console.log(err)
    }
    //  value.then(v=>console.log(v))

}
main()