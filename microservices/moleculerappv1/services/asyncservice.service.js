const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

broker.createService({
    name: 'greeter',
    actions: {
        //args
        // async sayHello(ctx) {
        //     //return promise
        //     return await ctx.call('hello.sayHello')
        // }
        hello: {
            async handler(ctx) {
                return await ctx.call('hello.sayHello')
            }
        }
    }
})


broker.createService({
    name: 'hello',
    actions: {
        //args
        sayHello(ctx) {
            //return promise
            return new this.Promise((resolve, reject) => {
                setTimeout(resolve, 5000, "Hello Async")
            })
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