import { appendCh, createEl } from "./utilities/dom.js";

export const createRemindersEl = () => {
  const reminders = createEl("div", "", "reminders");
  appendCh(reminders, document.querySelector(".modal--reminders__content"));

  const summary = createEl("div", "", "summary");
  const current = createEl("div", "", "summary__current");
  const completed = createEl("div", "", "summary__completed");
  appendCh(summary, document.querySelector(".tab--reminders"));
  appendCh(current, summary);
  appendCh(completed, summary);

  const currentWrapper = createEl("div", "", "summary__current__wrapper");
  const currentText = createEl("p", "Today");
  const calIcon = createEl("i", "", "fa-regular fa-calendar");
  const currentCounter = createEl("h5", "0");
  currentCounter.setAttribute("id", "currentCounter");
  appendCh(currentWrapper, current);
  appendCh(calIcon, currentWrapper);
  appendCh(currentCounter, currentWrapper);
  appendCh(currentText, current);

  const completedWrapper = createEl("div", "", "summary__completed__wrapper");
  const completedText = createEl("p", "Completed");
  const completedIcon = createEl("i", "", "fa-solid fa-inbox");
  const completedCounter = createEl("h5", "0");
  completedCounter.setAttribute("id", "completedCounter");
  appendCh(completedWrapper, completed);
  appendCh(completedIcon, completedWrapper);
  appendCh(completedCounter, completedWrapper);
  appendCh(completedText, completed);

  const header = createEl("div", "", "reminders__header");
  const title = createEl("h1", "Reminders", "reminders__header__title");
  const counter = createEl("h2", "0", "reminders__header__counter");
  appendCh(header, reminders);
  appendCh(title, header);
  appendCh(counter, header);

  const todoForm = createEl("form", "", "reminders__form");
  const todoListEl = createEl("ul", "", "reminders__list");
  const todoInput = createEl("input", "", "reminders__form__input");
  todoInput.setAttribute("type", "text");
  todoInput.required = true;
  appendCh(todoForm, reminders);
  appendCh(todoListEl, reminders);
  appendCh(todoInput, todoForm);
};

let todoList = [];
let completedList = [];

export const runReminders = () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", handleSubmit);
};

const handleSubmit = (e) => {
  e.preventDefault();
  const input = document.querySelector("input");
  const { value } = input;
  const newTodoObj = {
    todo: value,
    id: Date.now(),
  };
  todoList.push(newTodoObj);
  clearForm();
  printTodo(newTodoObj);
  todoCounter();
};

const todoCounter = () => {
  const counter = document.querySelector(".reminders__header__counter");
  const todayCounter = document.querySelector("#currentCounter");
  const completedCounter = document.querySelector("#completedCounter");

  console.log("list: ", todoList, completedList);

  counter.innerText = todoList.length;
  todayCounter.innerText = todoList.length;
  completedCounter.innerText = completedList.length;
};

const printTodo = (todoObj) => {
  const todoListEl = document.querySelector(".reminders__list");
  const todoItem = createEl("li", "", "reminders__list__item");
  const todoSpan = createEl(
    "span",
    todoObj.todo,
    "reminders__list__item__text"
  );
  const checkBtn = createEl("button", "", "reminders__list__item__checkBtn");
  todoItem.setAttribute("id", todoObj.id);
  checkBtn.setAttribute("id", todoObj.id);
  appendCh(checkBtn, todoItem);
  appendCh(todoSpan, todoItem);
  appendCh(todoItem, todoListEl);

  todoListEl.addEventListener("click", (e) => {
    e.preventDefault();
    const { target } = e;
    if (target.classList.contains("reminders__list__item__checkBtn")) {
      // console.log("buttonclicked", target.id);

      completeTodo(target.parentNode, target.id);
    }

    // if (
    //   e.target.classList.contains("reminders__list__item__checkBtn") ||
    //   e.target.parentNode.classList.contains("reminders__list__item__checkBtn")
    // ) {
    //   const btn = e.target.classList.contains("reminders__list__item__checkBtn")
    //     ? e.target
    //     : e.target.parentNode;
    //   console.log("button clicked", btn.id);
    //   completeTodo(btn.id);
    // }
  });
};

const clearForm = () => {
  document.querySelector("input").value = "";
};

const completeTodo = (parent, id) => {
  parent.remove();

  const completedItem = todoList.find((t) => t.id === +id);
  todoList = todoList.filter((t) => t !== completedItem);
  completedList.push(completedItem);
  // filter the multiple undefined
  // once a button clicked, the rest of button siblings are somehow triggered
  completedList = completedList.filter((c) => c);
  todoCounter();
};
