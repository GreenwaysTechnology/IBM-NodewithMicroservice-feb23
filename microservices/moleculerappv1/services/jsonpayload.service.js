const { ServiceBroker } = require('moleculer')
const TODOS = require('../mock-data/todos')

//serializer configuration
const broker = new ServiceBroker({
    serializer: "JSON"
})

broker.createService({
    name: 'todos',
    actions: {
        list() {
            return JSON.stringify(TODOS)
        }
    }
})



//start the broker 
async function main() {
    try {
        await broker.start()
        broker.repl()
    }
    catch (err) {
        console.err(err)
    }

}
main();