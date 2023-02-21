//Promise Object Creation using Promise factory apis 
//Promise is by default async 

function blockMe(message) {
    console.log(message)
}
function delay() {
    return Promise.resolve('success') // factory api to create promise object with success
}

blockMe('start')
delay().then(msg => console.log(msg))
blockMe('ends')