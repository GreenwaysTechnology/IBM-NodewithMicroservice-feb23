const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')

const broker = new ServiceBroker({
    transporter: "TCP"
})

//router configuration: url mapping
broker.createService({
    name: 'ApiGateWay',
    mixins: [ApiGateWay],
    //override many properties of the ApiGateWay(moleculer-web setting)
    settings: {
        routes: [
            {
                path: '/api',
                whitelist: [
                    "greeter.hai",
                    "greeter.hello"
                ]
            },
            {
                path: '/admin'
            }
        ]
    }
})

broker.createService({
    name: 'greeter',
    actions: {
        hello: {
            handler(ctx) {
                return 'Hello'
            }
        },
        hai: {
            handler(ctx) {
                return 'hai'
            }
        },
        greet: {
            handler(ctx) {
                return 'greet'
            }
        }
    }
})


async function main() {
    await broker.start()
}
main()