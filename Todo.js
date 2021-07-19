// Selectors

const input = document.querySelector("#input-task");
const addButton = document.querySelector("#add-task-btn");
const toDoList = document.querySelector(".tasks-area");
const filterToDo = document.querySelector(".filter-todo");

//Event Listeners

addButton.addEventListener("click", addTodo);
toDoList.addEventListener("click", checkDelete);
filterToDo.addEventListener("click", filter);

//Functions

function addTodo(event) {
  //Creating HTML tags
  var todoDiv = document.createElement("div");
  var li = document.createElement("li");
  var btnDiv = document.createElement("div");
  var checkBtn = document.createElement("button");
  checkBtn.innerHTML = '<i class=" fas fa-check"></i>';
  var trashBtn = document.createElement("button");
  trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
  li.textContent = input.value;

  // Nesting HTML tags;
  btnDiv.appendChild(checkBtn);
  btnDiv.appendChild(trashBtn);
  li.appendChild(btnDiv);
  todoDiv.appendChild(li);
  toDoList.appendChild(todoDiv);
  // Creating tags names;
  checkBtn.classList.add("checkBtn");
  trashBtn.classList.add("trashBtn");
  btnDiv.classList.add("divBtns");
  li.classList.add("task");
  todoDiv.classList.add("container-task");
  input.value = "";
}

function checkDelete(event) {
  const target = event.target;

  if (target.classList.contains("fa-trash")) {
    target.closest(".container-task").classList.add("fall");
    target.closest(".container-task").addEventListener("transitionend", () => {
      target.closest(".container-task").remove();
    });
  } else if (target.classList.contains("fa-check")) {
    target.classList.toggle("checkMark");
    target.closest(".container-task").classList.toggle("check");
  }
}

function filter(event) {
  const allTodo = toDoList.childNodes;

  allTodo.forEach((todo) => {
    const aux = event.target.value;
    console.log(aux);
    switch (aux) {
      case "all":
        todo.style.display = "block";
        break;
      case "Done": {
        console.log(todo.classList.contains("check"));
        if (todo.classList.contains("check")) {
          todo.style.display = "block";
        } else {
          todo.style.display = "none";
        }
        break;
      }
      case "Undone": {
        if (todo.classList.contains("check")) {
          todo.style.display = "none";
        } else {
          todo.style.display = "block";
        }
        break;
      }
    }
  });
  // console.log(event.target.value);
}
