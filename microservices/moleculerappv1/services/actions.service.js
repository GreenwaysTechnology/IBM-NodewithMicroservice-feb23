const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

broker.createService({
    name: 'greeter',
    actions: {
        //normal syntax
        sayHello(ctx) {
            //  const name = ctx.params.firstName 
            const { firstName, lastName } = ctx.params
            return `Hello ${firstName} ${lastName}`
        },
        sayHai: {
            //extra information: meta data: params validation
            params: {
                firstName: {
                    type: 'string',
                    min: 3,
                    max: 50,
                    default: 'default FirstName'
                },
                lastName: {
                    type: 'string',
                    min: 3,
                    max: 50,
                    default: 'default Last Name'
                },
                // firstName:'string'
            },
            //biz logic
            handler(ctx) {
                const { firstName, lastName } = ctx.params
                return `Hai ${firstName} ${lastName}`
            }
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

        const haiResponse = await broker.call('greeter.sayHai', { firstName: 'Subramanian', lastName: 'Murugan' })

        console.log(helloResponse)
        console.log(haiResponse)

        // const haiResWithError = await broker.call('greeter.sayHai', { firstName: 12, lastName: 34 })
        // const haiResWithError = await broker.call('greeter.sayHai', { firstName: 'ab', lastName: 'abc' })
        const haiResWithError = await broker.call('greeter.sayHai')
        console.log(haiResWithError)
    }
    catch (err) {
        console.log(err)
    }

}
main();