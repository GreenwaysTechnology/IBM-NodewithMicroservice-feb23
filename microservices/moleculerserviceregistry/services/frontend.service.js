const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')

const broker = new ServiceBroker({
    transporter: "TCP",
    registry: {
        discoverer: "Local",
       // strategy: "Random"
         //strategy:"CpuUsage"
        //   strategy:"RoundRobin"
       // discoverer: "redis://localhost:6379"
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



async function main() {
    await broker.start()
}
main()