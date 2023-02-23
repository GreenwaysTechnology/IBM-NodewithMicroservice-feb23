const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')

const broker = new ServiceBroker({
    transporter: "TCP"
})

//create Service: Gateway Service 
// broker.createService(ApiGateWay)
broker.createService({
    name: 'ApiGateWay',
    mixins: [ApiGateWay]
})

//back end service
broker.createService({
    name: 'greeter',
    actions: {
        hello: {
            handler(ctx) {
                return 'hello'
            }
        }
    }
})


async function main() {
    await broker.start()
}
main()