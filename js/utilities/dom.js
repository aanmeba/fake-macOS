export const createEl = (el, content, parent) => {
  const newEl = document.createElement(el);
  const newNode = document.createTextNode(content);
  newEl.appendChild(newNode);
  parent.appendChild(newEl);
};
