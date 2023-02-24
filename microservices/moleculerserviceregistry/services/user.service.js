const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker({
    transporter: "TCP",
    registry: {
        discoverer: "Local",
       // strategy: "Random"
         //strategy:"CpuUsage"
         strategy: "Random"
         // discoverer: "redis://localhost:6379"
    }
})
//if you want to work with database we need to inherit db adapters

broker.createService({
    name: 'users',
    actions: {
        list: {
            rest: "GET /",
            handler(ctx) {
                return `The User Service is coming from  ${broker.nodeID} `
            }
        }
    }

})


async function main() {
    await broker.start()
    broker.repl()
}
main()