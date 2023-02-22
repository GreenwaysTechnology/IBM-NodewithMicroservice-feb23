//import moleculer Service Broker 
const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()
//console.log(broker)

//service creation
//service schema is passed as parameter to the createService method
broker.createService({
    name: 'hello',
    actions: {
        //apis for the service
        sayHello() {
            return 'Hello MicroService'
        }
    }
})



//start the broker 
async function main() {
    // broker.start()
    //     .then(() => console.log("Broker is started"))
    //     .catch(err => console.log(err))
    try {
        await broker.start()
        console.log("Broker is Started")
        //invoking services
        const response = await broker.call('hello.sayHello')
        console.log(response)
    }
    catch (err) {
        console.err(err)
    }

}
main();