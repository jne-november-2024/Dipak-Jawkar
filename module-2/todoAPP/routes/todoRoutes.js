const express = require("express")
const Todo = require("../model/todoModel")
const {homePage, addTodo, deleteTodo, getAllTodo, editTodo} = require("../controller/todoController")
const route  = express.Router()

route.get("/",homePage)
route.post("/",addTodo)
route.get("/todos", getAllTodo)
route.post("/edit/:id",editTodo)
route.post("/delete/:id",deleteTodo)

module.exports = route