const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

broker.createService({
    name: 'greeter',
    actions: {
        //args
        sayHello(ctx) {
            //  const name = ctx.params.firstName 
            const { firstName, lastName } = ctx.params
            return `Hello ${firstName} ${lastName}`
        }
    }
})


//start the broker 
async function main() {

    try {
        await broker.start()
        console.log("Broker is Started")
        //pass input/parameter to service method
        const helloResponse = await broker.call('greeter.sayHello', { firstName: 'Subramanian', lastName: 'Murugan' })
        console.log(helloResponse)
    }
    catch (err) {
        console.err(err)
    }

}
main();