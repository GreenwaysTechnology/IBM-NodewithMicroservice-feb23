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

//http://localhost:3000/greeter/hello?name=Subramanian
//back end service
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
//http://localhost:3000/math/sum?a=60&b=20
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