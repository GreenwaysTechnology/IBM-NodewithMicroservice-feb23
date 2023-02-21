import { EventEmitter } from 'node:events'

class SalesService extends EventEmitter {
    constructor() {
        super()
        this.on('sales', (data) => {
            console.log(data)
        })
    }
    buy(product) {
        this.emit('sales', product)
    }

}
function main() {
    let service = new SalesService();
    //attach listerner
    // service.on('sales', (data) => {
    //     console.log(data)
    // })
    //emit event
    service.buy({ id: 1, name: 'phone', price: 100 })
}
main()