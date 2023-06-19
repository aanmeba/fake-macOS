import { appendCh, createEl } from "./utilities/dom.js";

export const runPhotoBooth = async () => {
  console.log("photo booth.... ");

  const video = createEl("video");
  video.setAttribute("autoplay", "");

  const bottomMenu = createEl("div", "", "photo--menu");
  const btn = createEl("button", "", "photo--menu__btn");

  appendCh(video, document.querySelector(".modal"));
  appendCh(bottomMenu, document.querySelector(".modal"));
  appendCh(btn, document.querySelector(".photo--menu"));

  let stream;

  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
  } catch (err) {
    console.err("Error accessing camera: ", err);
  }

  const toggleBtn = document.querySelector(".photo--menu__btn");

  toggleBtn.addEventListener("click", () => {
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      videoElement.srcObject = null;
    }
  });
};
