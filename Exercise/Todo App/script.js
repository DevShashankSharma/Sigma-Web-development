document.addEventListener("DOMContentLoaded", function () {
    loadTodos();
});

function addTodo() {
    const newTodoInput = document.getElementById("newTodo");
    const newTodo = newTodoInput.value.trim();

    if (newTodo !== "") {
        const todoList = getTodos();
        todoList.push(newTodo);
        saveTodos(todoList);
        newTodoInput.value = "";
        displayTodos();
    }
}

function deleteTodo(index) {
    const todoList = getTodos();
    todoList.splice(index, 1);
    saveTodos(todoList);
    displayTodos();
}

function deleteAll() {
    localStorage.removeItem("todos");
    displayTodos();
}

function getTodos() {
    return JSON.parse(localStorage.getItem("todos")) || [];
}

function saveTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function displayTodos() {
    const todoList = getTodos();
    const todoListContainer = document.getElementById("todoList");
    todoListContainer.innerHTML = "";

    if (todoList.length === 0) {
        todoListContainer.innerHTML = "<p>No todos yet. Add some!</p>";
    } else {
        todoList.forEach((todo, index) => {
            const li = document.createElement("li");
            li.textContent = todo;
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", () => deleteTodo(index));
            li.appendChild(deleteButton);
            todoListContainer.appendChild(li);
        });
    }
}

function loadTodos() {
    displayTodos();
}
