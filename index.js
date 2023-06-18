import { createEl } from "./js/utilities/dom.js";
// current time
// 🔥 Fix: setTimeout or setInterval to update the time regularly
const utility = document.querySelector(".utility");
const utilityItems = document.querySelectorAll(".utility__item");
const dateArr = new Date().toDateString().split(" ").slice(0, -1);
const date = `${dateArr[0]} ${dateArr[2]} ${dateArr[1]}`;
const time = new Date()
  .toTimeString()
  .split(" ")[0]
  .split(":")
  .slice(0, -1)
  .join(":");

setTimeout(() => {}, 1000);
createEl("p", date, utilityItems[utilityItems.length - 2]);
createEl("p", time, utilityItems[utilityItems.length - 1]);

// when hovering,
// 1. scale up the icon -> css &:hover pseudo class
// 2. scale a little bit of the neighbours
//  -> find which icon is hovered and scale the neighbours

const icons = document.querySelectorAll(".dock__container__ico");

icons.forEach((icon, index, nodeList) => {
  icon.addEventListener("mouseover", (e) => {
    // capture the event from <li>, not <img>
    const item = e.currentTarget;
    // get the mouse's offset value
    const itemRect = item.getBoundingClientRect();
    // e.clientX - itemRect.left
    // - e.clientX: where the event happends in x-axis
    // - itemRect.left: where the item locates from left of the screen
    const offset = Math.abs((e.clientX - itemRect.left) / itemRect.width);

    // get the siblings - to do so, we need to select <li> items, not <img> icons which don't have siblings
    let prev = item.previousElementSibling; // can be null
    let next = item.nextElementSibling; // can be null

    let scale = 0.6;
    resetScale();
    if (prev) {
      prev.style.setProperty("--scale", 1 + scale * Math.abs(offset - 1));
    }

    item.style.setProperty("--scale", 1 + scale);

    if (next) {
      next.style.setProperty("--scale", 1 + scale * offset);
    }
  });
});

document.querySelector(".dock").addEventListener("mouseleave", (e) => {
  resetScale();
});

function resetScale() {
  document.querySelectorAll(".dock__container__ico").forEach((icon) => {
    icon.style.setProperty("--scale", 1);
  });
}

//  Round 2 - use property - transform: scale()

// if (prev) {
//   prev.style.setProperty(
//     "transform",
//     `scale(${1 + scale * Math.abs(offset - 1)})`
//   );
// }

// item.style.setProperty("transform", `scale(${1 + scale})`);

// if (next) {
//   next.style.setProperty("transform", `scale(${1 + scale * offset})`);
// }
// });
// });

// document
// .querySelector(".dock__container")
// .addEventListener("mouseleave", (e) => {
// resetScale();
// });

// function resetScale() {
// document.querySelectorAll(".dock__container__ico").forEach((li) => {
// li.style.setProperty("transform", `scale(1)`);
// });
// }

//  Round 1
// icons.forEach((icon, index, nodeList) => {
//   icon.addEventListener("mouseover", () => {
//     if (index + 1 <= nodeList.length && index - 1 >= 0)
//       icons[index].style.transformOrigin = "90% 150%";
//     icons[index].style.transform = "scale(1.5)";
//     icons[index + 1].style.transformOrigin = "50% 100%";

//     icons[index - 1].style.transformOrigin = "50% 100%";
//     icons[index + 1].style.transform = "scale(1.15)";
//     icons[index - 1].style.transform = "scale(1.15)";
//   });
//   icon.addEventListener("mouseout", () => {
//     if (index + 1 <= nodeList.length && index - 1 >= 0)
//       icons[index].style.transformOrigin = "";
//     icons[index].style.transform = "scale(1)";
//     icons[index - 1].style.transformOrigin = "";
//     icons[index + 1].style.transformOrigin = "";
//     icons[index + 1].style.transform = "scale(1)";
//     icons[index - 1].style.transform = "scale(1)";
//   });
// });

// check which icon in the dock is clicked
// - icons variable - __ico
const apps = document.querySelectorAll(".dock__container__item__active");

console.log(apps);
apps.forEach((app) => {
  app.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("clicked working app");
  });
});
