const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')
const DbService = require('moleculer-db')
const Fakerator = require('fakerator');

//Fakerator object we need to create
const fakerator = new Fakerator();

const broker = new ServiceBroker({
    transporter: "TCP"
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
                    "REST users": "users",
                }
            }
        ]
    }
})

//if you want to work with database we need to inherit db adapters

broker.createService({
    name: 'users',
    //db service
    mixins: [DbService],
    //adapter configurations says that what type of database you are connecting-postr
    adapter: new DbService.MemoryAdapter(), //MemoryAdapter is ne db
    //column mapping
    settings: {
        fields: ["_id", "firstName", "lastName", "email", "status"],
        pageSize: 200
    },
    //life cycle method
    afterConnected() {
        //seeding the database with default data
        console.log('connection started')

    },
    methods: {
        //private methods
        async seedDB() {
            console.log('Seeding User Database starts');
            //generate fake users
            const fakeUsers = fakerator.times(fakerator.entity.user, 200);
            //insert into db
            const insertedUsers = await this.adapter.insertMany(fakeUsers);
            console.log(`Created ${insertedUsers.length}`)
        }
    },
    //service life cycle
    async started() {
        if ((await this.adapter.count()) === 0) {
            await this.seedDB();
        } else {
            console.log(`DB contains ${await this.adapter.count()} users`)
        }
    },
    actions: {
        //by default db service provides most of the actions(curd actions)
    }
})

async function main() {
    await broker.start()
}
main()