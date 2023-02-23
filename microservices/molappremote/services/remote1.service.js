const { ServiceBroker } = require('moleculer')

// const broker = new ServiceBroker({
//     transporter:"TCP"
// });

const broker = new ServiceBroker({
    transporter:"nats://localhost:4222"
})
//service 1 
broker.createService({
    name: 'math',
    actions: {
        sum: {
            handler(ctx) {
                const { a, b } = ctx.params
                return ctx.call('add.sum', { a, b })
            }
        }
    }
})



async function main() {
  await broker.start()
  broker.repl()
}
main()