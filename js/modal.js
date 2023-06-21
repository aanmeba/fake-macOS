import { appendCh, createEl } from "./utilities/dom.js";

export const openedApps = [];

export const createModal = (app) => {
  if (!openedApps.includes(app)) openedApps.push(app);
  console.log("createModal function is triggered");
  const modal = createEl("div", "", `modal--${app}`);
  const tab = createEl("div", "", "tab");
  const buttons = createEl("ul", "", "tab__buttons");
  const li1 = createEl("li", "");
  const li2 = createEl("li", "");
  const li3 = createEl("li", "");
  const content = createEl("div", "", `modal--${app}__content`);

  li1.setAttribute("id", "closeBtn");
  li2.setAttribute("id", "minBtn");
  li3.setAttribute("id", "maxBtn");
  content.setAttribute("id", "modalContent");

  // select elements freshly, otherwise null is returned
  appendCh(modal, document.querySelector("body"));
  appendCh(tab, document.querySelector(`.modal--${app}`));
  appendCh(buttons, document.querySelector(".tab"));
  appendCh(li1, document.querySelector(".tab__buttons"));
  appendCh(li2, document.querySelector(".tab__buttons"));
  appendCh(li3, document.querySelector(".tab__buttons"));
  appendCh(content, document.querySelector(`.modal--${app}`));
};

export const closeModal = (app) => {
  const closeBtn = document.querySelector("#closeBtn");
  closeBtn?.addEventListener("click", () => {
    console.log("clicked closeBTN");
    const openedModal = document.querySelector(`.modal--${app}`);
    openedModal.remove();

    // openedApps - update state
    if (openedApps.length !== 0) openedApps.filter((el) => el !== app);
  });
};
