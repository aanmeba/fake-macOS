import { closeModal } from "./modal.js";
import { appendCh, createEl } from "./dom-utils.js";

export const createCalculatorEl = () => {
  console.log("calculator is building...");

  const modalTab = document.querySelector(".tab--calculator");
  modalTab.style.backgroundColor = "transparent";

  const calculator = createEl("div", "", "calc");
  const displayResult = createEl("div", "0", "calc__display");
  displayResult.setAttribute("id", "displayResult");
  appendCh(calculator, document.querySelector(".modal--calculator__content"));
  appendCh(displayResult, document.querySelector(".calc"));

  const clearBtn = createEl("button", "C", "calc__button");
  const deleteBtn = createEl("button", "←", "calc__button");
  clearBtn.setAttribute("id", "calcClearBtn");
  deleteBtn.setAttribute("id", "calcDeleteBtn");
  appendCh(clearBtn, document.querySelector(".calc"));
  appendCh(deleteBtn, document.querySelector(".calc"));

  const divide = createEl("button", "÷", "calc__button calc__operators");
  const multiply = createEl("button", "×", "calc__button calc__operators");
  const minus = createEl("button", "-", "calc__button calc__operators");
  const plus = createEl("button", "+", "calc__button calc__operators");
  const equal = createEl("button", "=", "calc__button calc__operators");
  divide.setAttribute("id", "divide");
  multiply.setAttribute("id", "multiply");
  minus.setAttribute("id", "minus");
  plus.setAttribute("id", "plus");
  equal.setAttribute("id", "equal");
  appendCh(divide, document.querySelector(".calc"));
  appendCh(multiply, document.querySelector(".calc"));
  appendCh(minus, document.querySelector(".calc"));
  appendCh(plus, document.querySelector(".calc"));
  appendCh(equal, document.querySelector(".calc"));

  const dot = createEl("button", ".", "calc__button calc__numbers");
  dot.setAttribute("id", "dot");
  appendCh(dot, document.querySelector(".calc"));

  deleteBtn.disabled = true;
  dot.disabled = true;

  let nums = [];
  for (let i = 0; i < 10; i++) {
    const newEl = createEl("button", `${i}`, "calc__button calc__numbers");
    newEl.setAttribute("id", `num${i}`);
    nums.push(newEl);
    appendCh(newEl, document.querySelector(".calc"));
  }
};

let currentValue = "0";
let isCalculating = false;
let total = 0;
let operator;

export const runCalculator = () => {
  // get the input values
  const calculator = document.querySelector(".calc");

  // add event listener to the parent
  calculator.addEventListener("click", (e) => {
    e.preventDefault();

    // otherwise, default value of displayResult (0) is sent to the handleBtnClick func
    if (e.target.id !== "displayResult") {
      handleBtnClick(e.target.innerText);
    }
  });
};

const handleBtnClick = (value) => {
  console.log("handleBtnClicked!", value);
  if (isNaN(+value)) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  rerender();
};

const rerender = () => {
  const display = document.querySelector("#displayResult");
  const valueLength = currentValue.length;
  let size;

  if (!isCalculating) {
    display.removeAttribute("style");
  }

  if (valueLength > 9) {
    size = 30 - valueLength * 0.5;
    display.style.fontSize = size + "px";
  }
  display.innerText = currentValue;
};

const handleNumber = (value) => {
  if (!isCalculating) {
    currentValue = value;
    isCalculating = true;
  } else {
    currentValue += value;
  }
};

const handleSymbol = (value) => {
  switch (value) {
    case "C":
      currentValue = "0";
      isCalculating = false;
      total = 0;
      break;
    case "=":
      isCalculating = false;
      handleCalculation(+currentValue);
      console.log(currentValue, total, typeof total);
      currentValue = total;
      total = 0;
      break;
    case "←":
      console.log("not yet ready");
      break;
    case "÷":
    case "×":
    case "+":
    case "-":
      handleMath(value);
      break;
  }
};

const handleMath = (value) => {
  operator = value;

  if (!total) {
    total = +currentValue;
  } else {
    handleCalculation(+currentValue);
  }

  isCalculating = false;
};

const handleCalculation = (num) => {
  switch (operator) {
    case "+":
      total += num;
      break;
    case "-":
      total -= num;
      break;
    case "×":
      total *= num;
      break;
    case "÷":
      total /= num;
      break;
  }
};
