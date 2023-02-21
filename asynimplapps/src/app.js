import { TodoService } from "./services/todo.service.js";

async function main() {
    let todoService = new TodoService();
    //callback pattern
    //todoService.findAll(todos => console.log(todos), err => console.log(err))
    //promise pattern using then and catch
    // todoService.list().then(todos=>console.log(todos)).catch(err=>console.log(err))
    //using async and await keywords
    try {
        const todos = await todoService.list()
        console.log(todos)
    }
    catch (err) {
        console.log(err)
    }
}
main()