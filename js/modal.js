import { appendCh, createEl } from "./utilities/dom.js";

export const createModal = () => {
  console.log("createModal function is triggered");
  const modal = createEl("div", "", "modal");
  const tab = createEl("div", "", "tab");
  const buttons = createEl("ul", "", "tab__buttons");
  const li1 = createEl("li", "");
  const li2 = createEl("li", "");
  const li3 = createEl("li", "");
  const content = createEl("div", "", "modal__content");

  li1.setAttribute("id", "closeBtn");
  li2.setAttribute("id", "minBtn");
  li3.setAttribute("id", "maxBtn");
  content.setAttribute("id", "modalContent");

  // select elements freshly, otherwise null is returned
  appendCh(modal, document.querySelector("body"));
  appendCh(tab, document.querySelector(".modal"));
  appendCh(buttons, document.querySelector(".tab"));
  appendCh(li1, document.querySelector(".tab__buttons"));
  appendCh(li2, document.querySelector(".tab__buttons"));
  appendCh(li3, document.querySelector(".tab__buttons"));
  appendCh(content, document.querySelector(".modal"));
};

export const closeModal = () => {
  const closeBtn = document.querySelector("#closeBtn");
  closeBtn?.addEventListener("click", () => {
    console.log("clicked closeBTN");
    const openedModal = document.querySelector(".modal");
    openedModal.remove();
  });
};

// export const addContentIntoModal = (el, content) => {
//   console.log(el, content, "-- addContentInModal");
// };
