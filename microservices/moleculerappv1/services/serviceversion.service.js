const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

broker.createService({
    name: 'greeter',
    version: 1,
    actions: {
        hello: {
            handler(ctx) {
                return 'Hello version 1'
            }
        }
    }
})
broker.createService({
    name: 'greeter',
    version: 2,
    actions: {
        hello: {
            handler(ctx) {
                return 'Hello version 2'
            }
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