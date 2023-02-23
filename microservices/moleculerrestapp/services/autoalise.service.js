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
                    "REST customers": "customers"
                },
                autoAliases: true

            },
            {
                path: '/admin'
            }
        ]
    }
})

//convert back end service into rest service
broker.createService({
    name: 'users',
    actions: {
        list: {
            rest: "GET /",
            handler(ctx) {
                return 'User list'
            }
        },
        get: {
            rest: "GET /:id",
            handler(ctx) {
                return `Get by ${ctx.params.id}`
            }
        },
        create: {
            rest: "POST /",
            handler(ctx) {
                console.log(ctx.params)
                return `Saved ${ctx.params.id}`
            }
        },
        update: {
            rest: "PUT /:id",
            handler(ctx) {
                return `user update by ${ctx.params.id}`
            }
        },
        remove: {
            rest: "DELETE /:id",
            handler(ctx) {
                return `user Delete by ${ctx.params.id}`
            }
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