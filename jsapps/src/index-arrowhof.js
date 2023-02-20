//basic hof and arrow

function sayHai(hai) {
    hai('Hai')
}
sayHai(function (message) {
    console.log(message)
})

//replace the above function into arrow 
let sayHello = hello => hello('Hello')

sayHello((message) => {
    console.log(message)
})
sayHello(message => console.log(message))
/////////////////////////////////////////////////////////////////////////////////////

function login(userName, password, success, failure) {
    // biz logic
    if (userName === 'admin' && password === 'admin') {
        success('Login success')
    } else {
        failure('Login failed')
    }
}
login('admin', 'admin', function (status) {
    console.log(status)
}, function (err) {
    console.log(err)
})

const auth = (userName, password, success, failure) => {
    // biz logic
    if (userName === 'admin' && password === 'admin') {
        success('Login success')
    } else {
        failure('Login failed')
    }
}
auth('admin', 'admin', (status) => {
    console.log(status)
}, (err) => {
    console.log(err)
})
auth('admin', 'admin', status => console.log(status),
    err => console.log(err))