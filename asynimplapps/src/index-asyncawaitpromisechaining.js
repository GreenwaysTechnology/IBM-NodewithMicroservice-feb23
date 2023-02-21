const getUser = () => {
    console.log('getUser is called')
    return new Promise((resolve, reject) => {
        let user = {
            name: 'admin',
            password: 'admin'
        }
        let error = {
            message: 'User Not Found'
        }
        // user = null
        if (user) {
            setTimeout(resolve, 1000, user)
        } else {
            setTimeout(reject, 1000, error)
        }
    })
}
const login = user => {
    console.log('login is called')

    return new Promise((resolve, reject) => {
        if (user.name === 'admin' && user.password === 'admin') {
            setTimeout(resolve, 1000, 'login success')
        } else {
            setTimeout(reject, 1000, 'login failed')
        }
    })
}
const showDashboard = status => {
    console.log('showDashboard is called')
    return new Promise((resolve, reject) => {
        if (status === 'login success') {
            setTimeout(resolve, 1000, 'welcome to Admin  Page')
        } else {
            setTimeout(reject, 1000, 'Welcome to Guest Page')
        }
    })
}
async function main() {
    // getUser()
    // .then(user => login(user))
    // .then(status => showDashboard(status))
    // .then(page => console.log(page))
    // .catch(err => console.log(err))
    try {
        //sync style of writing async code.
        const user = await getUser()
        const status = await login(user)
        const page = await showDashboard(status)
        console.log(user,status,page)
    }
    catch (err) {
        console.log(err)
    }
}
main()
