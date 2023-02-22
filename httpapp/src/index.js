import { createServer } from 'node:http'
import { TodoService } from './services/Todo.service.js'

function main() {

    let todoService = new TodoService()

    //create server
    const server = createServer(async (req, res) => {
        //send json 
        try {
            const todos = await todoService.list()
            const body = JSON.stringify(todos)
            //send response as json 
            res.writeHead(200, {
                'Content-Length': Buffer.byteLength(body),
                'Content-Type': 'application/json',
            })
            res.end(body);
        }
        catch (err) {
             res.end(JSON.stringify({message:'Not Found'}))
        }
    })

    //start server
    server.listen(3000, () => {
        console.log("HTTP server is listening")
    })

}
main()