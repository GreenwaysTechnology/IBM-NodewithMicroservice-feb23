//First async programming: non blocking programming using timers api and callback pattern.

function blockMe(message) {
    console.log(message)
}

function delay(callback) {
    //non blocking api 
    setTimeout(callback, 5000, 'hello')
}

blockMe('start')
delay(data => console.log(data))
blockMe('end')