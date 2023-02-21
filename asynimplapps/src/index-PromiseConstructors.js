//biz logic with promise factory api

function blockMe(message) {
    console.log(message)
}
const login = (userName, password) => {

    //Promise Constructors: used to convert any callback based api into Promise
    return new Promise((resolve, reject) => {
        if (userName === 'admin' && password === 'admin') {
            //here any async api can go like socket api,fs api
            setTimeout(resolve, 1000, 'login success')
        } else {
            setTimeout(reject, 1000, 'login failed')
        }
    })

}

blockMe('start')
login('admin', 'admin')
    .then(status => console.log(status))
    .catch(err => console.log(err))
blockMe('ends')