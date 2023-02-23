const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker({
    transporter:"TCP"
});

broker.createService({
    name: 'order',
    events: {
        "order.created": {
            handler(ctx) {
                //here you can persist data into database
                // const data = ctx.params
                console.log('event is fired')
                // console.log(data)
                console.log("Payload:", ctx.params);
                console.log("Sender:", ctx.nodeID);
                console.log("Metadata:", ctx.meta);
                console.log("The called event name:", ctx.eventName);
            }
        }
    }
})



async function main() {
  await broker.start()
  broker.repl()
}
main()