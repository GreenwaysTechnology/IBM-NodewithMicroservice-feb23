const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')

const broker = new ServiceBroker({
    transporter: "TCP",
    requestTimeout: 5 * 1000, // Global timeout
    registry: {
        discoverer: "Local",
        strategy: "RoundRobin"
    }
})

//api server : http server
broker.createService({
    name: 'ApiGateWay',
    mixins: [ApiGateWay],
    settings: {
        routes: [
            {
                path: '/api',
                aliases: {
                },
                autoAliases: true
            }
        ]
    }
})

//calller
broker.createService({
    name: 'users',
    actions: {
        list: {
            rest: "GET /",
            fallback: 'getValue',
            handler(ctx) {
                //timeout for callee : the users service expects data from the comments service within 2000ms.
                return ctx.call('comments.list', { timeout: 3000 })
            }
        }
    },
    methods: {
        getValue() {
            return 'Sorry Timeouted'
        }
    }

})
//callee
broker.createService({
    name: 'comments',
    actions: {
        list: {
            handler(ctx) {
                return new this.Promise((resolve, reject) => {
                    setTimeout(resolve, 5000, "comments")
                })

            }
        }
    }

})
async function main() {
    await broker.start()
}
main()