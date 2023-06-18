export const createEl = (el, content, parent, className) => {
  const newEl = document.createElement(el);
  const newNode = document.createTextNode(content);
  newEl.appendChild(newNode);
  className && newEl.classList.add(className);
  parent.appendChild(newEl);
};
