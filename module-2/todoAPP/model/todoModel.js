const fs = require('fs');
const path = require('path');

module.exports = class Todo {
    constructor(title, description, id = null) {
        this.title = title;
        this.description = description;
        this.id = id || Date.now().toString(); 
    }

    static save(newTodo, cb) {
        const filePath = path.join(__dirname, "..", "data", "todo.json");

        fs.readFile(filePath, (err, data) => {
            if (err) return cb(err);

            let todos = [];
            try {
                todos = JSON.parse(data);
            } catch (err) {
                return cb(err);
            }

            if (newTodo.id) {
                todos = todos.filter(todo => todo.id !== newTodo.id);
            }

            todos.push(newTodo);

            fs.writeFile(filePath, JSON.stringify(todos, null, 2), (err) => {
                if (err) return cb(err);
                cb(null, todos);  
            });
        });
    }
};
