const express = require("express")

//create application object  by express() function
const app = express()

//Rest end points : mapping url aginst http methods
app.get("/", (req, res) => {
    res.end("Home")
})
app.get("/hello", (req, res) => {
    res.end("Hello!!!")
})
//sending json 
app.get('/greet', (req, res) => {
    res.status(200).json([{ id: 1, message: 'hello' }, { id: 2, message: 'hai' }])
})
//post 
app.post('/hello', (req, res) => {
    //read request payload 
    let body = ''
    req.on('data', chunk => {
        body += chunk
    })
    req.on('end', chunk => {
        res.status(200).end(`Hello ${body}`)
    })
})
app.put('/hello', (req, res) => {
    //read request payload 
    let body = ''
    req.on('data', chunk => {
        body += chunk
    })
    req.on('end', chunk => {
        res.status(200).end(`Hello ${body}`)
    })
})
app.delete('/hello', (req, res) => {
    //read request payload 
    let body = ''
    req.on('data', chunk => {
        body += chunk
    })
    req.on('end', chunk => {
        res.status(200).end(`Hello ${body}`)
    })
})
//Start Express server 
app.listen(3000, () => {
    console.log("Express server is running!")
})