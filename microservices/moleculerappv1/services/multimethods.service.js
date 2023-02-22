const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

broker.createService({
    name: 'greeter',
    actions: {
        //apis for the service
        sayHello() {
            return 'Hello MicroService'
        },
        sayHai() {
            return 'Hai MicroService'
        },
        sayGreet() {
            return 'Greet MicroService'
        }
    }
})


//start the broker 
async function main() {

    try {
        await broker.start()
        console.log("Broker is Started")
        //invoking services
        const helloResponse = await broker.call('greeter.sayHello')
        const haiResponse = await broker.call('greeter.sayHai')
        const greetResponse = await broker.call('greeter.sayGreet')
        console.log(helloResponse, haiResponse,greetResponse)
    }
    catch (err) {
        console.err(err)
    }

}
main();