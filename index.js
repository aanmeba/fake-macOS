import { createCalculatorEl, runCalculator } from "./js/calculator.js";
import { createModal, closeModal, openedApps } from "./js/modal.js";
import { createPhotoBoothEl, runPhotoBooth } from "./js/photo_booth.js";
import { closeDropdown, createDropDown } from "./js/menu_dropdown.js";
import { createRemindersEl, runReminders } from "./js/reminders.js";
import getDateTime from "./js/date_time.js";

setInterval(getDateTime, 1000);

const apps = document.querySelectorAll(".dock__container__item__active");

// createModal("reminders");

apps.forEach((app) => {
  app.addEventListener("click", (e) => {
    e.preventDefault();
    const { id } = e.currentTarget;

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
});

const background = document.querySelector(".background");
background.addEventListener("click", () => {
  if (isDropdownOpen) {
    closeDropdown();
    isDropdownOpen = false;
  }
});
