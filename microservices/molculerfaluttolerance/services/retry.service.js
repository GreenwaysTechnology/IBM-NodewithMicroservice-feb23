const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')

const broker = new ServiceBroker({
    transporter: "TCP",
    requestTimeout: 5 * 1000, // in milliseconds
    retryPolicy: {
        enabled: true,
        retries: 5,
        delay: 100,
        maxDelay: 2000,
        factor: 2,
        check: err => err && !!err.retryable
    },
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
                console.log('calling....', new Date())
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