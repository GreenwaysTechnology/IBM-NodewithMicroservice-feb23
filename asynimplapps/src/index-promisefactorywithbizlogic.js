//biz logic with promise factory api

function blockMe(message) {
    console.log(message)
}
const login = (userName, password) => {
    if (userName === 'admin' && password === 'admin') {
        return Promise.resolve('login success')
    } else {
        return Promise.reject('login failed')
    }
}

blockMe('start')
login('admin', 'admin')
    .then(status => console.log(status))
    .catch(err => console.log(err))
blockMe('ends')