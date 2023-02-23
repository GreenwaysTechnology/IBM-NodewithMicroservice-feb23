const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

broker.createService({
    name: 'math',
    actions: {
        sum: {
            handler(ctx) {
                const { a, b } = ctx.params
                //invoke private methods
                return this.add(a, b)
            }
        }
    },
    //life cycle methods
    //life cycle methods
    created() {
        console.log('service is created')
    },
    merged() {
        console.log('service is merged')
    },
    async started() {
        console.log('service is started ')
    },
    async stoped() {
        console.log('service stopped')
    },
    methods: {
        //private methods
        add(a, b) {
            return a + b
        }
    }
})


//start the broker 
async function main() {

    try {
        await broker.start()
        broker.repl()
    }
    catch (err) {
        console.err(err)
    }

}
main();