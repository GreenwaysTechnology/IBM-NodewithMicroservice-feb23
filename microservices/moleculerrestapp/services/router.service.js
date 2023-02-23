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
                path: '/api'
            },
            {
                path: '/admin'
            }
        ]
    }
})

//http://localhost:3000/api/math/multiply?a=60&b=10
broker.createService({
    name: 'greeter',
    actions: {
        hello: {
            handler(ctx) {
                const { name } = ctx.params
                return `hello ${name}`
            }
        }
    }
})
broker.createService({
    name: 'math',
    actions: {
        sum: {
            //extra information: meta data: params validation
            params: {
                a: {
                    type: 'string',
                    default: 0
                },
                b: {
                    type: 'string',
                    default: 0
                },
            },
            //biz logic
            handler(ctx) {
                const { a, b } = ctx.params
                const result = parseInt(a) + parseInt(b)
                return `result is ${result} `
            }
        },
        multiply: {
            //extra information: meta data: params validation
            params: {
                a: {
                    type: 'string',
                    default: 0
                },
                b: {
                    type: 'string',
                    default: 0
                },
            },
            //biz logic
            handler(ctx) {
                const { a, b } = ctx.params
                const result = parseInt(a) * parseInt(b)
                return `result is ${result} `
            }
        }
    }
})

async function main() {
    await broker.start()
}
main()