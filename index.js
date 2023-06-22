import { createCalculatorEl, runCalculator } from "./js/calculator.js";
import { createModal, closeModal, openedApps } from "./js/modal.js";
import { createPhotoBoothEl, runPhotoBooth } from "./js/photo_booth.js";
import { appendCh, createEl } from "./js/utilities/dom.js";
import { closeDropdown, createDropDown } from "./js/menu_dropdown.js";
import { createRemindersEl, runReminders } from "./js/reminders.js";
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
const dateEl = createEl("p", date);
const timeEl = createEl("p", time);
appendCh(dateEl, utilityItems[utilityItems.length - 2]);
appendCh(timeEl, utilityItems[utilityItems.length - 1]);

// check which icon in the dock is clicked
// - icons variable - __ico
const apps = document.querySelectorAll(".dock__container__item__active");

console.log(apps);
apps.forEach((app) => {
  app.addEventListener("click", (e) => {
    e.preventDefault();
    const { id } = e.currentTarget;
    console.log(id, "-- app id"); // reminders id doens't exist

    if (!openedApps.includes(id)) {
      createModal(id);
      closeModal(id);

      if (id === "photoBooth") {
        createPhotoBoothEl();
        runPhotoBooth();
      }

      if (id === "calculator") {
        createCalculatorEl();
        runCalculator();
      }

      if (id === "reminders") {
        createRemindersEl();
        runReminders();
      }
    }
  });
});

let isDropdownOpen = false;
const apple = document.querySelector(".menu__item"); // first menu__item

apple.addEventListener("click", () => {
  if (!isDropdownOpen) {
    createDropDown();
    isDropdownOpen = true;
  }
  console.log(isDropdownOpen, "-- isDropdownOen?");
});

const background = document.querySelector(".background");
background.addEventListener("click", () => {
  if (isDropdownOpen) {
    closeDropdown();
    isDropdownOpen = false;
  }
});
