export const createEl = (el, content, className) => {
  const newEl = document.createElement(el);
  if (content) {
    const newNode = document.createTextNode(content);
    newEl.appendChild(newNode);
  }
  if (className) {
    className.includes(" ")
      ? className.split(" ").forEach((c) => newEl.classList.add(c))
      : className && newEl.classList.add(className);
  }
  return newEl;
};

export const appendCh = (el, parent) => {
  parent.appendChild(el);
};
