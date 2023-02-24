const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')

const broker = new ServiceBroker({
    transporter: "TCP",
    bulkhead: {
        enabled: true,
        concurrency: 3, //Maximum concurrent executions.
        maxQueueSize: 4, //how many people can wait in the wait queue
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
        cors: {
            // Configures the Access-Control-Allow-Origin CORS header.
            origin: "*",
            // Configures the Access-Control-Allow-Methods CORS header. 
            methods: ["GET", "OPTIONS", "POST", "PUT", "DELETE"],
            // Configures the Access-Control-Allow-Headers CORS header.
            allowedHeaders: [],
            // Configures the Access-Control-Expose-Headers CORS header.
            exposedHeaders: [],
            // Configures the Access-Control-Allow-Credentials CORS header.
            credentials: false,
            // Configures the Access-Control-Max-Age CORS header.
            maxAge: 3600
        },
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
            //  fallback: 'getValue',
            bulkhead: {
                // Disable bulkhead for this action
                enabled: true,
                concurrency: 3
            },
            handler(ctx) {
                //timeout for callee : the users service expects data from the comments service within 2000ms.
                //return ctx.call('comments.list', { timeout: 6000 })
                console.log('users are calling')
                return 'users'
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
            bulkhead: {
                // Disable bulkhead for this action
                enabled: true
            },
            handler(ctx) {
                console.log("calling...")
                return 'comments'

            }
        }
    }

})
async function main() {
    await broker.start()
}
main()