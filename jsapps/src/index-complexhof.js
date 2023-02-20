//how to pass multiple function as parameter.

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

login('foo', 'bar', function (status) {
    console.log(status)
}, function (err) {
    console.log(err)
})