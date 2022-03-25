const { time } = require('console');
const fs = require('fs');

var add = (title, stat, description, time, priority) => {
    var todos = getTodos();
    var todo = {
        title,
        stat,
        description,
        time,
        priority,
    };

    var duplicatetodos = todos.filter((todo) => {
        todo.title === title
      
    });

    if (duplicatetodos.length === 0) {
        todos.push(todo);
        saved(todos);
        // fs.writeFileSync('todo.json', JSON.stringify(todos));
        return todo;
    }
};

var getTodos = () => {
    try {
        var todosString = fs.readFileSync('todo.json');
        return JSON.parse(todosString);
    } catch (e) {
        return [];
    }
}
var saved = (todos) => {
    fs.writeFileSync('todo.json', JSON.stringify(todos));
}
var deleteT = (title) => {
    var todos = getTodos();
    var filteredtodos = todos.filter((todo) => todo.title !== title);
    saved(filteredtodos);
  
    return `Deleted todo: ${title}`
};
var finishT = (title) => {
    var todos = getTodos();
    var filteredtodos = todos.map((todo) => {
        if (todo.title === title) {
            todo.stat = "FINISH";
            saved(todos);
        }
       
    });

    
  };
module.exports = {
    add,
    deleteT,
    finishT
};