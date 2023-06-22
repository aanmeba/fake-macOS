import { appendCh, createEl } from "./dom-utils.js";

export let openedApps = [];

export const createModal = (app) => {
  if (!openedApps.includes(app)) openedApps.push(app);

  const modal = createEl("div", "", `modal--${app}`);
  const tab = createEl("div", "", `tab--${app}`);
  const buttons = createEl("ul", "", `tab--${app}__buttons`);
  const li1 = createEl("li", "");
  const li2 = createEl("li", "");
  const li3 = createEl("li", "");
  const content = createEl("div", "", `modal--${app}__content`);

  li1.setAttribute("id", "closeBtn");
  li1.setAttribute("data-id", app);
  li2.setAttribute("id", "minBtn");
  li3.setAttribute("id", "maxBtn");
  content.setAttribute("id", "modalContent");

  // select elements freshly, otherwise null is returned
  appendCh(modal, document.querySelector("body"));
  appendCh(tab, document.querySelector(`.modal--${app}`));
  appendCh(buttons, document.querySelector(`.tab--${app}`));
  appendCh(li1, document.querySelector(`.tab--${app}__buttons`));
  appendCh(li2, document.querySelector(`.tab--${app}__buttons`));
  appendCh(li3, document.querySelector(`.tab--${app}__buttons`));
  appendCh(content, document.querySelector(`.modal--${app}`));
};

export const closeModal = (app) => {
  const closeBtn = document.querySelector(`[data-id=${app}]`);

  closeBtn?.addEventListener("click", () => {
    const openedModal = document.querySelector(`.modal--${app}`);
    openedModal && openedModal.remove();

    // openedApps - update state
    if (openedApps.length !== 0) {
      openedApps = openedApps.filter((el) => el !== app);
    }
  });
};
