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
                    //User url and method mapping
                    //users
                    "GET users": "user.list",  //GET list is default method
                    "GET users/:id": "user.get", //users/1 users/2 users/3
                    "POST users": "user.create",
                    "PUT users/:id": "user.update",
                    "DELETE users/:id": "user.remove",
                    //customer
                    "GET customers": "customers.list",  //GET list is default method
                    "GET customers/:id": "customers.get", //users/1 users/2 users/3
                    "POST customers": "customers.create",
                    "PUT customers/:id": "customers.update",
                    "DELETE customers/:id": "customers.remove"
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