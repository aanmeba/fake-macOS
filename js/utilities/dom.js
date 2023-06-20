export const createEl = (el, content, className) => {
  const newEl = document.createElement(el);
  if (content) {
    const newNode = document.createTextNode(content);
    newEl.appendChild(newNode);
  }
  className && newEl.classList.add(className);
  return newEl;
};

export const appendCh = (el, parent) => {
  parent?.appendChild(el);
};
