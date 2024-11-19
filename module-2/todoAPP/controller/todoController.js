const fs = require("fs")
const path = require("path")
const Todo = require("../model/todoModel")
const { redirect404 } = require("../utils/redirec404")

module.exports.homePage = (req, res) => {
    return res.render("../views/pages/home.ejs",{
        edit :false
    })
}

module.exports.getAllTodo = (req, res) => {
    const todos = []
    fs.readFile(path.join(__dirname, "..", "data", "todo.json"), (err, data) => {
        if (err) {
            return res.render("../views/pages/error.ejs")
        }
        const list = JSON.parse(data)
        return res.render("../views/pages/todolist.ejs", {
            todos: list
        })
    })
}

module.exports.addTodo = (req, res) => {
    const {id, title, description } = req.body
    const todo = new Todo(title, description, id)
    Todo.save(todo, (err, todos) => {
        if (err) console.log(err)
        else return res.redirect("/")
    })
}



module.exports.deleteTodo = (req, res) => {
    const id = req.params.id;  
    console.log("Deleting Todo with ID:", id);

   
    fs.readFile(path.join(__dirname, "..", "data", "todo.json"), (err, data) => {
        if (err) {
            console.log(err);
            return redirect404(res);
        }

        console.log(data)
       
        let todos = [];
        try {
            todos = JSON.parse(data);
        } catch (parseError) {
            console.log(parseError); 
            return redirect404(res); 
        }

        const updatedTodos = todos.filter(todo => todo.id != id);

        console.log(updatedTodos, id)
       

        fs.writeFile(path.join(__dirname, "..", "data", "todo.json"), JSON.stringify(updatedTodos), (err) => {
            if (err) {
                console.log(err); 
                return redirect404(res); 
            }

            return res.render("../views/pages/todolist", { todos: updatedTodos });
        });
    });
};

module.exports.editTodo = (req, res) => {
    const id = req.params.id; 
    console.log("edit id is => ", id);
    let todos = [];

    fs.readFile(path.join(__dirname, "..", "data", "todo.json"), (err, data) => {
        if (err) {
            console.log(err);
            return redirect404(res); 
        }

        console.log(data)

        try {
            todos = JSON.parse(data);
        } catch (parseError) {
            console.log(parseError);
            return redirect404(res); 
        }

        const todoToEdit = todos.find(todo => todo.id == id);

        console.log(todoToEdit)

        if (!todoToEdit) {
            return redirect404(res);
        }

        return res.render("../views/pages/home.ejs", {
            edit: true,
            data: todoToEdit
        });
    });
};
