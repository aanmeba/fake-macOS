export const createEl = (el, content, className) => {
  const newEl = document.createElement(el);
  const newNode = document.createTextNode(content ?? content);
  className && newEl.classList.add(className);
  newEl.appendChild(newNode);
  return newEl;
};

export const appendCh = (el, parent) => {
  parent?.appendChild(el);
};
