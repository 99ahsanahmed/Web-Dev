document.addEventListener("DOMContentLoaded", () => {
  //* Getting all the important html elements
  const todoInput = document.getElementById("todo-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const list = document.getElementById("todo-list");

  //* An array where every entered task will get stored
  let todos = JSON.parse(localStorage.getItem("todo")) || [];

  //* Getting seperate elements
  todos.forEach((singleTodo) => render(singleTodo));

  //* Handling the add functionality
  addTaskBtn.addEventListener("click", () => {
    const enteredValue = todoInput.value.trim();
    if (enteredValue === "") return;
    const newTodo = {
      id: Date.now(),
      text: enteredValue,
      completed: false,
    };
    todos.push(newTodo);
    addToStorage();
    render(newTodo);
    console.log(todos);
    todoInput.value = "";
  });


  //* Rendering the tasks
  function render(singleTodo) {
    const li = document.createElement("li");
    li.setAttribute("li" , singleTodo.text);
    li.innerHTML = `
    <span>${singleTodo.text}</span>
    <button> Remove </button>
    `;
    li.addEventListener("click" , (e)=>{
      if (e.target.tagName === "BUTTON") return;
      singleTodo.completed = !singleTodo.completed;
      li.classList.toggle('completed');
      addToStorage();
    })
    li.querySelector("button").addEventListener("click" , (e)=>{
      e.stopPropagation();
      todos = todos.filter((text)=>text.id !== singleTodo.id)
      li.remove();
      addToStorage() 
    })
    list.appendChild(li)
  }

  //* Handling local storage i.e: saving the todo
  function addToStorage() {
    // setItem(key: string, value: string): void
    localStorage.setItem("todo", JSON.stringify(todos));
  }

    
});
