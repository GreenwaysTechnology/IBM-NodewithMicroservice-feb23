import { TODOS } from '../mock-data/todos.js'

export class TodoService {
    constructor() { }
    //async apis 
    //callback style
    findAll(resolve, reject) {
        if (TODOS) {
            setTimeout(resolve, 1000, TODOS)
        } else {
            setTimeout(reject, 1000, { message: 'Data Not Found' })
        }
    }
    //Promise Style
    list() {
        return new Promise((resolve, reject) => {
            if (TODOS) {
                setTimeout(resolve, 1000, TODOS)
            } else {
                setTimeout(reject, 1000, { message: 'Data Not Found' })
            }
        })
    }
}

