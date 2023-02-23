const { ServiceBroker } = require('moleculer')
const hello = require('./helloparent.service')
const hai = require('./haiparent.service')

const broker = new ServiceBroker()

broker.createService({
    mixins: [hello, hai],
    name: 'greeter',
    actions: {
        sayGreet(){
            return 'greet'
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