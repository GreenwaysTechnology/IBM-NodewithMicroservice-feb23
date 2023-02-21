//callback nesting: async composition
/**
 * In traditional sequtional program flow
 *  let user =getUser()
 *  let status = login(user)
 *  let dashboard =showDashboard(status)
 */
//Async program flow: callback based : Nesting callbacks.
//

const getUser = (success, failure) => {
    let user = {
        name: 'admin',
        password: 'admin'
    }
    let error = {
        message: 'User Not Found'
    }
    // user = null
    if (user) {
        setTimeout(success, 1000, user)
    } else {
        setTimeout(failure, 1000, error)
    }
}
const login = (user, success, failure) => {
    if (user.name === 'admin' && user.password === 'admin') {
        setTimeout(success, 1000, 'login success')
    } else {
        setTimeout(failure, 1000, 'login failed')
    }
}
const showDashboard = (status, success, failure) => {
    if (status === 'login success') {
        setTimeout(success, 1000, 'welcome to Admin  Page')
    } else {
        setTimeout(failure, 1000, 'Welcome to Guest Page')
    }
}

//callback nesting
getUser(user => {
    console.log(user)
    login(user, status => {
        console.log(status)
        showDashboard(status, page => {
            console.log(page)
        }, err => {
            console.log(err)
        })
    }, err => {
        console.log(err)
    })
}, err => {
    console.log(err)
})