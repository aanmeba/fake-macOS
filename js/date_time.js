const getDateTime = () => {
  const utilityItems = document.querySelectorAll(".utility__item");
  const dateArr = new Date().toDateString().split(" ").slice(0, -1);
  const date = `${dateArr[0]} ${dateArr[2]} ${dateArr[1]}`;
  const time = new Date()
    .toTimeString()
    .split(" ")[0]
    .split(":")
    .slice(0, -1)
    .join(":");

  const timeEl = utilityItems[utilityItems.length - 1];
  const dateEl = utilityItems[utilityItems.length - 2];
  timeEl.innerText = time;
  dateEl.innerText = date;
};

export default getDateTime;
