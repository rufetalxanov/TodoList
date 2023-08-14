const info = document.querySelector("#info"),
  todoInput = document.querySelector("#todoInput"),
  todoAdd = document.querySelector("#todoAdd"),
  todoList = document.querySelector("#todoList");

let todoData = [];

todoInput.addEventListener("input", function (e) {
  const value = e.target.value;

  if (value.length < 6) {
    // console.log(info);
    info.classList.add("show");
    return;
  }
  info.classList.remove("show");
  // console.log(value);
});

todoAdd.addEventListener("click", function () {
  const value = todoInput.value;

  if (value.length < 6) {
    alert("Error");
    return;
  }

  todoData.push(value);

  todoInput.value = "";

  const newContent = todoData
    .map((todo, index) => `<li>${index + 1}.${todo} </li>`)
    .join("");

  // console.log(newContent);

  todoList.innerHTML = newContent;
});
