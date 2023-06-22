import { appendCh, createEl } from "./dom-utils.js";

let isCameraWorking = true;

export const createPhotoBoothEl = () => {
  const video = createEl("video");
  video.setAttribute("autoplay", "");

  const bottomMenu = createEl("div", "", "photo--menu");
  const btn = createEl("button", "", "photo--menu__btn");
  const videoIcon = createEl("div", "", "photo--menu__btn__stop");
  videoIcon.setAttribute("id", "videoIcon");

  appendCh(video, document.querySelector(".modal--photoBooth__content"));
  appendCh(bottomMenu, document.querySelector(".modal--photoBooth"));
  appendCh(btn, document.querySelector(".photo--menu"));
  appendCh(videoIcon, document.querySelector(".photo--menu__btn"));
};

const stopCamera = async (stream) => {
  console.log("stopCamera...");

  try {
    if (stream) {
      const tracks = await stream.getTracks();
      tracks.forEach((track) => track.stop());
      isCameraWorking = false;
    }
  } catch (err) {
    console.log("Something went wrong...", err);
  }
};

export const runPhotoBooth = async () => {
  const video = document.querySelector("video");

  let stream;
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
  } catch (err) {
    console.log("Error accessing camera: ", err);
  }

  const closeModalBtn = document.querySelector("#closeBtn");
  closeModalBtn.addEventListener("click", () => {
    if (isCameraWorking) stopCamera(stream);
    isCameraWorking = !isCameraWorking;
  });

  const stopBtn = document.querySelector(".photo--menu__btn");
  stopBtn.addEventListener("click", () => {
    if (isCameraWorking) stopCamera(stream);
    isCameraWorking = !isCameraWorking;
  });
};
