/**
 * 1.create http server
 * 2.create application
 * 3.deploy it 
 */
import { createServer } from 'node:http'

function main() {
    //create server
    const server = createServer((req, res) => {
        //handle client request and send response
        res.end("Hello")
    })

    //start server
    server.listen(3000, () => {
        console.log("HTTP server is listening")
    })

}
main()