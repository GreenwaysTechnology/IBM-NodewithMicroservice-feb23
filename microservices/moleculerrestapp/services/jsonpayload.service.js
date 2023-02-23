const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')
const TODOS = require('../mock-data/todos')

const broker = new ServiceBroker({
    transporter: "TCP",
    serializer: "JSON"
})

//router configuration: url mapping
broker.createService({
    name: 'ApiGateWay',
    mixins: [ApiGateWay],
    //override many properties of the ApiGateWay(moleculer-web setting)
    settings: {
        routes: [
            {
                path: '/api'
            },
            {
                path: '/admin'
            }
        ]
    }
})

broker.createService({
    name: 'todo',
    actions: {
        list: {
            async handler(ctx) {
                return await this.Promise.resolve(TODOS)
            }
        }
    }
})


async function main() {
    await broker.start()
}
main()