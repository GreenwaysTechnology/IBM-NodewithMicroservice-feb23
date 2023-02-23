const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

//parent service which has some properties
const webServer = {
    name: 'webserver',
    //parent properties
    settings: {
        port: 8080,
        host: 'ibm.com'
    }
}


broker.createService({
    name: 'greeter',
    mixins: [webServer],
    //override parent properties
    settings: {
        port: 3000
    },
    actions: {
        //args
        sayHello(ctx) {
            //  const name = ctx.params.firstName 
            const { firstName, lastName } = ctx.params
            return `Hello ${firstName} ${lastName} ${this.settings.port} ${this.settings.host} `
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