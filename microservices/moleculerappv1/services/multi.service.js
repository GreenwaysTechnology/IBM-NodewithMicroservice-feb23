const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

broker.createService({
    name: 'hello',
    actions: {
        //apis for the service
        sayHello() {
            return 'Hello MicroService'
        }
    }
})
broker.createService({
    name: 'hai',
    actions: {
        //apis for the service
        sayHai() {
            return 'Hi MicroService'
        }
    }
})


//start the broker 
async function main() {

    try {
        await broker.start()
        console.log("Broker is Started")
        //invoking services
        const helloResponse = await broker.call('hello.sayHello')
        const haiResponse = await broker.call('hai.sayHai')
        console.log(helloResponse,haiResponse)
    }
    catch (err) {
        console.err(err)
    }

}
main();