import { TODOS } from '../mock-data/todos.js'

export class TodoService {
    constructor() { }

    list() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, TODOS)
        })
    }
}