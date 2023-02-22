const express = require('express')
const { list } = require('../services/todos.service')
//create Router object 
const todoRouter = express.Router()

//api 
todoRouter.get("/", async (req, res) => {
    try {
        const todos = await list()
        res.status(200).json(todos)
    }
    catch (err) {
        res.status(400).json({ err })
    }
})
//api 
todoRouter.get("/list", async (req, res) => {
    try {
        const todos = await list()
        res.status(200).json(todos)
    }
    catch (err) {
        res.status(400).json({ err })
    }
})
//POST ,PUT,DELETE ....



//export the RouterObject to app.js
module.exports = todoRouter