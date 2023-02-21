//Promise Object Creation using Promise factory apis 
//Promise is by default async 

function blockMe(message) {
    console.log(message)
}
function delay() {
    return Promise.reject('failed') // factory api to create promise object with success
}

blockMe('start')
delay().catch(err => console.log(err))
blockMe('ends')