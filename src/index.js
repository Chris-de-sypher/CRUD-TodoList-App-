/** @format */
import './style/main.css'

const input_field = document.querySelector("#typing");
let content = "";
let arr = [];
let newArray = [];
let parentId;
const box = document.querySelector("#box");
const TaskDone = document.querySelector("#DoneTask");
const submit = document.querySelector(".sub");

// time
// let daysAhead;
// let hoursahead;
// let minutesAhead;
// let secondsAhead;

submit.addEventListener("click", (e) => {
  const typingContent = input_field.value;
  if (typingContent == "") {
    return false;
  } else {
    arr.push(typingContent);
  }

  Todo(arr);

  input_field.value = "";
  input_field.focus();
  if (arr.length > 0) {
    box.style.display = "flex";
  }

  // setInterval(() => {
  // timer();
  //  }, 1000)
});

window.onload = function () {
  if (arr.length == 0) {
    box.innerHTML = "<h3>" + "Create a task" + "</h3>";
  } else return false;
  input_field.focus();
};

// loop through the array with map and return a new a array
const Todo = async (items) => {
  let contents = await items
    .map((item) => {
      return `
          <div data-id="${arr.indexOf(item)}">
          <span id="items">${item}</span>
          <span class="complete" id="check" title=${item}>check</span>
          <span class="del"><i class="fa-solid fa-trash-can" id="del"></i></span>
          <span class="pen"><i class="fa-solid fa-pen-to-square" id="pen"></i></span>
          </div>
        `;
    })
    .join("");
  box.innerHTML = contents;
};

box.addEventListener("click", (e) => {
  e.preventDefault();
  let deleteButton = e.target.id === "del";
  let editBtn = e.target.id === "pen";
  let check = e.target.id === "check";
  let Id = e.target.parentElement.dataset.id;
  // console.log(Id);
  if (deleteButton) {
    const par = e.target.parentElement.parentElement.dataset.id;
    arr.splice(par, 1);
    let v = arr.filter((elem) => {
      if (elem != "") {
        return elem;
      }
    });
    Todo(v);
    console.log(arr);

    if (arr.length == 0) {
      box.style.display = "none";
    }
  }

  if (editBtn) {
    const edit = e.target.parentElement.parentElement;
    const parent = e.target.parentElement.parentElement.dataset.id;
    let childs = edit.children[0].textContent;
    console.log(childs);
    let newText = childs;

    input_field.value = newText;
    submit.innerHTML = "Save";
    input_field.focus();

    submit.onclick = () => {
      arr.splice(parent, 1, input_field.value);
      let v = arr.filter((elem) => {
        if (elem != "") {
          return elem;
        }
      });
      Todo(v);

      submit.innerHTML = "Add";
    };
  }

  if (check) {
    parentId = e.target.parentElement;
    let Ids = e.target.parentElement.dataset.id;
    let childs = parentId.children[1];

    childs.innerHTML = "<i class='fa-solid fa-check' id='check'></i>";

    newArray.push(...arr.splice(Ids, 1));
    DoneTask(newArray);

    setTimeout(() => {
      let v = arr.filter((elem) => {
        if (elem != "") {
          return elem;
        }
      });
      Todo(v);
    }, 2000);
    console.log(Ids);
  } else {
    console.log(false);
  }
});

const DoneTask = async (Props) => {
  let NewContent = Props.map((elem) => {
    return `
        <div>
          <span id="DoneItems">${elem}</span>
          <span class="complt" id="check">completed</span>
        </div>`;
  }).join("");
  TaskDone.style.display = "flex";
  TaskDone.innerHTML = NewContent;
};




















