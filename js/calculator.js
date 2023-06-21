import { appendCh, createEl } from "./utilities/dom.js";

export const createCalculatorEl = () => {
  console.log("calculator is building...");

  const modalTab = document.querySelector(".tab");
  modalTab.style.backgroundColor = "transparent";

  const calculator = createEl("div", "", "calc");
  // const display = createEl("div", "", "calc__display");
  const displayResult = createEl("div", "0", "calc__display");
  appendCh(calculator, document.querySelector("#modalContent"));
  // appendCh(display, document.querySelector(".calc"));
  // appendCh(displayResult, document.querySelector(".calc__display"));
  appendCh(displayResult, document.querySelector(".calc"));
  displayResult.setAttribute("id", "displayResult");

  // const helpers = createEl("div", "", "calc__helpers");
  const clearBtn = createEl("button", "C", "calc__button");
  clearBtn.setAttribute("id", "calcClearBtn");
  const deleteBtn = createEl("button", "←", "calc__button");
  deleteBtn.setAttribute("id", "calcDeleteBtn");

  // appendCh(helpers, document.querySelector(".calc"));
  // appendCh(clearBtn, document.querySelector(".calc__helpers"));
  // appendCh(deleteBtn, document.querySelector(".calc__helpers"));
  appendCh(clearBtn, document.querySelector(".calc"));
  appendCh(deleteBtn, document.querySelector(".calc"));

  // const operations = createEl("div", "", "calc__operations");
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

  // appendCh(operations, document.querySelector(".calc"));
  // appendCh(divide, document.querySelector(".calc__operations"));
  // appendCh(multiply, document.querySelector(".calc__operations"));
  // appendCh(minus, document.querySelector(".calc__operations"));
  // appendCh(plus, document.querySelector(".calc__operations"));
  // appendCh(equal, document.querySelector(".calc__operations"));
  appendCh(divide, document.querySelector(".calc"));
  appendCh(multiply, document.querySelector(".calc"));
  appendCh(minus, document.querySelector(".calc"));
  appendCh(plus, document.querySelector(".calc"));
  appendCh(equal, document.querySelector(".calc"));

  // const numbers = createEl("div", "", "calc__numbers");
  // appendCh(numbers, document.querySelector(".calc"));

  // const num1 = createEl('button', '1', 'calc__button')
  // const num2 = createEl('button', '2', 'calc__button')
  // const num3 = createEl('button', '3', 'calc__button')
  // const num4 = createEl('button', '4', 'calc__button')
  // const num5 = createEl('button', '5', 'calc__button')
  // const num6 = createEl('button', '6', 'calc__button')
  // const num7 = createEl('button', '7', 'calc__button')
  // const num8 = createEl('button', '8', 'calc__button')
  // const num9 = createEl('button', '9', 'calc__button')
  // const num0 = createEl('button', '0', 'calc__button')
  // const dot = createEl("button", ".", "calc__button");
  const dot = createEl("button", ".", "calc__button");
  appendCh(dot, document.querySelector(".calc"));
  dot.setAttribute("id", "dot");

  let nums = [];
  for (let i = 0; i < 10; i++) {
    const newEl = createEl("button", `${i}`, "calc__button");
    newEl.setAttribute("id", `num${i}`);
    nums.push(newEl);
    // appendCh(newEl, document.querySelector(".calc__numbers"));
    appendCh(newEl, document.querySelector(".calc"));
  }
  // const [num0, num1, num2, num3, num4, num5, num6, num7, num8, num9] = nums
};

// <div class="project">
//   <h1 class="title">Mac Calculator</h1>
//   <p class="subtitle">Change Sass var $calc-size to adjust overall size
//   <div class="calc">
//     <div class="calc-sect-display">
//       <div class="calc-display">
//         0
//       </div>
//     </div>
//     <div class="calc-sect-memory">
//       <button class="calc-button calc-clear">
//         <span class="calc-button--inner">
//           C
//         </span>
//       </button>
//       <button class="calc-button calc-delete">
//         <span class="calc-button--inner">
//           ←
//         </span>
//       </button>
//     </div>
//     <div class="calc-sect-operations">
//       <button class="calc-button calc-divide">
//         <span class="calc-button--inner">
//           ÷
//         </span>
//       </button>
//       <button class="calc-button calc-multiply">
//         <span class="calc-button--inner">
//           ×
//         </span>
//       </button>
//       <button class="calc-button calc-subtract">
//         <span class="calc-button--inner">
//           -
//         </span>
//       </button>
//       <button class="calc-button calc-add">
//         <span class="calc-button--inner">
//           +
//         </span>
//       </button>
//       <button class="calc-button calc-equals">
//         <span class="calc-button--inner">
//           =
//         </span>
//       </button>
//     </div>
//     <div class="calc-sect-numbers">
//       <button class="calc-button calc-num-0">
//         <span class="calc-button--inner">
//           0
//         </span>
//       </button>
//       <button class="calc-button calc-num-1">
//         <span class="calc-button--inner">
//           1
//         </span>
//       </button>
//       <button class="calc-button calc-num-2">
//         <span class="calc-button--inner">
//           2
//         </span>
//       </button>
//       <button class="calc-button calc-num-3">
//         <span class="calc-button--inner">
//           3
//         </span>
//       </button>
//       <button class="calc-button calc-num-4">
//         <span class="calc-button--inner">
//           4
//         </span>
//       </button>
//       <button class="calc-button calc-num-5">
//         <span class="calc-button--inner">
//           5
//         </span>
//       </button>
//       <button class="calc-button calc-num-6">
//         <span class="calc-button--inner">
//           6
//         </span>
//       </button>
//       <button class="calc-button calc-num-7">
//         <span class="calc-button--inner">
//           7
//         </span>
//       </button>
//       <button class="calc-button calc-num-8">
//         <span class="calc-button--inner">
//           8
//         </span>
//       </button>
//       <button class="calc-button calc-num-9">
//         <span class="calc-button--inner">
//           9
//         </span>
//       </button>
//     </div>
//   </div>
// </div>
