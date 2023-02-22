const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()


//local service communication

broker.createService({
    name: 'math',
    actions: {
        sum: {
            params: {
                a: {
                    type: 'number',
                    positive: true,
                    integer: true,
                    default: 10
                },
                b: {
                    type: 'number',
                    positive: true,
                    integer: true,
                    default: 10
                }
            },
            handler(ctx) {
                const { a, b } = ctx.params
                //call other service
                // return ctx.call('add.sum', { a: a, b: b })
                return ctx.call('add.sum', { a, b})

            }
        }
    }
})


broker.createService({
    name: 'add',
    actions: {
        sum: {
            params: {
                a: {
                    type: 'number',
                    positive: true,
                    integer: true,
                    default: 10
                },
                b: {
                    type: 'number',
                    positive: true,
                    integer: true,
                    default: 10
                }
            },
            handler(ctx) {
                const { a, b } = ctx.params
                return a + b
            }
        }
    }
})


async function main() {
    try {
        await broker.start()
        broker.repl()

    }
    catch (err) {
        console.log(err)
    }

}
main()