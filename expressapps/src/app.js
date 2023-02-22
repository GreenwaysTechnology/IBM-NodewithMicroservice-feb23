const express = require("express")
//create application object  by express() function
const app = express()
const todoRouter = require('./routers/todo.router')

//Gobal end points
app.get("/", (req, res) => {
    res.end("Home")
})
//bind routers with application object 
app.use('/api/todos', todoRouter)


//Start Express server 
app.listen(3000, () => {
    console.log("Express server is running!")
})