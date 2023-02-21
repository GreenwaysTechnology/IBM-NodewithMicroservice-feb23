//complex callbacks: async biz logic .
function blockMe(message) {
    console.log(message)
}
const login = (userName, password, success, failure) => {
    if (userName === 'admin', password === 'admin') {
        setTimeout(success, 1000, 'Login success')
    } else {
        setTimeout(failure, 1000, 'Login failed')
    }
}
blockMe('start')
login('admin', 'admin', status => console.log(status), err => console.log(err))
blockMe('end')