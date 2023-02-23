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
                aliases: {
                    "REST users": "users",
                    "REST customers": "customers"
                }

            },
            {
                path: '/admin'
            }
        ]
    }
})

broker.createService({
    name: 'user',
    actions: {
        list() {
            return 'user list'
        },
        get(ctx) {
            const { id } = ctx.params
            return `user by ${id}`
        },
        create(ctx) {
            console.log(ctx.params)
            return 'user saved'
        },
        update(ctx) {
            const { id } = ctx.params

            return `user update by ${id}`
        },
        remove(ctx) {
            const { id } = ctx.params

            return `user delete by ${id}`
        }
    }
})
broker.createService({
    name: 'customers',
    actions: {
        list() {
            return 'customer list'
        },
        get(ctx) {
            const { id } = ctx.params
            return `customer by ${id}`
        },
        create(ctx) {
            console.log(ctx.params)
            return 'customer saved'
        },
        update(ctx) {
            const { id } = ctx.params

            return `customer update by ${id}`
        },
        remove(ctx) {
            const { id } = ctx.params

            return `customer delete by ${id}`
        }
    }
})

async function main() {
    await broker.start()
}
main()