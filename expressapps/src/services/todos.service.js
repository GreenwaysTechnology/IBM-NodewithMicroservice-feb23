const TODOS = require('../mock-data/todos')

class TodoService {
    constructor() { }
    //apis 
    list() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve,1000,TODOS)
        })
    }
    //create , update, delete
}
module.exports = new TodoService()