const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

let todos = [];

function renderTodos() {
	// Clear todo list
	todoList.innerHTML = "";

	// Render each todo item
	todos.forEach((todo, index) => {
		const li = document.createElement("li");

		const span = document.createElement("span");
		span.innerText = todo;

		const deleteButton = document.createElement("button");
		deleteButton.innerText = "Delete";
		deleteButton.addEventListener("click", () => {
			deleteTodo(index);
		});

		const editButton = document.createElement("button");
		editButton.innerText = "Edit";
		editButton.classList.add("edit");
		editButton.addEventListener("click", () => {
			editTodoPrompt(index);
		});

		li.appendChild(span);
		li.appendChild(editButton);
		li.appendChild(deleteButton);
		todoList.appendChild(li);
	});
}

function addTodo() {
	const todoText = todoInput.value.trim();

	if (todoText !== "") {
		todos.push(todoText);
		todoInput.value = "";
		renderTodos();
	}
}

function deleteTodo(index) {
	todos.splice(index, 1);
	renderTodos();
}

function editTodoPrompt(index) {
	const todoText = prompt("Enter new task:", todos[index]);

	if (todoText !== null) {
		todos[index] = todoText.trim();
		renderTodos();
	}
}

// Add event listeners
todoForm.addEventListener("submit", (event) => {
	event.preventDefault();
	addTodo();
});



