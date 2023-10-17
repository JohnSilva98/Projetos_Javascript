const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
const editForm = document.querySelector("#edit-form")
const editInput = document.querySelector("#edit-input")
const cancelEditBtn = document.querySelector("#cancel-editbtn")

//funções
const saveTodo = (text) => {
  const todo = document.createElement("div")
  todo.classList.add("todo")

  const todoTitle = document.createElement("h3")
  todoTitle.innerHTML = text
  todo.appendChild(todoTitle)

  const doneBtn = document.createElement("button")
  doneBtn.classList.add("finish-todo")
  doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
  todo.appendChild(doneBtn)

  const editBtn = document.createElement("button")
  editBtn.classList.add("edit-todo")
  doneBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
  todo.appendChild(editBtn)

  const removeBtn = document.createElement("button")
  removeBtn.classList.add("remove-todo")
  removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
  todo.appendChild(removeBtn)

  todoList.appendChild(todo)
  todoInput.value = ""
  todoInput.focus()
}

//eventos
todoForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const input = todoInput.value

  if (input) {
    saveTodo(input)
  }
})

document.addEventListener("click", (e) => {
  const targetEl = e.target
  const parentEl = targetEl.closest("div")
  if (targetEl.classList.contains("finish-todo")) {
    parentEl.classList.toggle("done")
  }

  if (targetEl.classList.contains("remove-todo")) {
    parentEl.remove()
  }
})
