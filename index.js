import { createEl } from "./js/utilities/dom.js";
// current time
// 🔥 Fix: setTimeout or setInterval to update the time regularly
const utility = document.querySelector(".utility");
const utilityItems = document.querySelectorAll(".utility__item");
const dateArr = new Date().toDateString().split(" ").slice(0, -1);
const date = `${dateArr[0]} ${dateArr[2]} ${dateArr[1]}`;
const time = new Date()
  .toTimeString()
  .split(" ")[0]
  .split(":")
  .slice(0, -1)
  .join(":");

setTimeout(() => {}, 1000);
createEl("p", date, utilityItems[utilityItems.length - 2]);
createEl("p", time, utilityItems[utilityItems.length - 1]);
