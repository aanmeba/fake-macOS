import { appendCh, createEl } from "./dom-utils.js";

export const createDropDown = () => {
  const header = document.querySelector("header");
  const container = createEl("div", "", "dropdown");
  const select = createEl("ul", "", "dropdown__container");
  const menus = [
    "About This Mac",
    "System Preferences...",
    "App Store...",
    "Recent Items",
    "Force Quit",
    "Sleep",
    "Restart...",
    "Shut Down",
    "Lock Screen",
  ];

  const dividers = [1, 3, 4, 5, 8];
  menus.forEach((menu, i) => {
    const newEl = createEl("li", menu, `dropdown__item`);
    if (dividers.includes(i)) {
      const hr = createEl("hr");
      appendCh(hr, select);
    }
    appendCh(newEl, select);
  });

  header.insertAdjacentElement("afterend", container);
  appendCh(select, container);
};

export const closeDropdown = () => {
  const dropdown = document.querySelector(`.dropdown`);
  dropdown && dropdown.remove();
};
