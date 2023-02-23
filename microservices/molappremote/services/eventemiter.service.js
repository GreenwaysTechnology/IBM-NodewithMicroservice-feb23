const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker({
    transporter: "TCP"
});

//service 1 
broker.createService({
    name: 'cart',
    actions: {
        checkout: {
            handler(ctx) {
                const { id, name, qty } = ctx.params
                // ctx.emit('order.created', { id: id, name: name, qty: qty })
                ctx.broadcast('order.created', { id: id, name: name, qty: qty })
                return 'order has been processed'
            }
        }
    }
})

// eventemiter.service.js

async function main() {
    await broker.start()
    broker.repl()
}
main()