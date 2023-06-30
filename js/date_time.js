const getDateTime = () => {
  const utilityItems = document.querySelectorAll(".utility__item");

  getDate(utilityItems[utilityItems.length - 2]);
  getTime(utilityItems[utilityItems.length - 1]);
};

const getDate = (el) => {
  const [day, month, date] = new Date().toDateString().split(" ");
  el.innerText = `${day} ${date} ${month}`;
};

const getTime = (el) => {
  const [hour, minute] = new Date().toTimeString().split(":");
  el.innerText = `${hour}:${minute}`;
};

export default getDateTime;
