import { appendCh, createEl } from "./utilities/dom.js";

let isCameraWorking = true;

export const createPhotoBoothEl = () => {
  console.log("photo booth.... ");

  /** create photo booth window */
  const video = createEl("video");
  video.setAttribute("autoplay", "");

  const bottomMenu = createEl("div", "", "photo--menu");
  const btn = createEl("button", "", "photo--menu__btn");
  const videoIcon = createEl("div", "", "photo--menu__btn__stop");
  videoIcon.setAttribute("id", "videoIcon");

  appendCh(video, document.querySelector(".modal--photoBooth"));
  appendCh(bottomMenu, document.querySelector(".modal--photoBooth"));
  appendCh(btn, document.querySelector(".photo--menu"));
  appendCh(videoIcon, document.querySelector(".photo--menu__btn"));
};

export const runPhotoBooth = async () => {
  const video = document.querySelector("video");
  /** run webcam */
  let stream;
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
  } catch (err) {
    console.log("Error accessing camera: ", err);
  }

  /** toggle start / stop buttons */
  const toggleBtn = document.querySelector(".photo--menu__btn");
  const closeModalBtn = document.querySelector("#closeBtn");
  closeModalBtn.addEventListener("click", () => {
    console.log("close button clicked");
    // stopCamera(stream);
    isCameraWorking = !isCameraWorking;

    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      video.srcObject = null;
      isCameraWorking = false;
    }
    toggleVideoButtonClass();
  });

  toggleBtn.addEventListener("click", () => {
    console.log("toggleBtn button clicked");
    // stopCamera(stream);
    // if (stream) {
    //   const tracks = stream.getTracks();
    //   tracks.forEach((track) => track.stop());
    //   videoElement.srcObject = null;

    //   isCameraWorking = false;
    //   toggleVideoButtonClass();
    // }

    isCameraWorking = !isCameraWorking;

    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      video.srcObject = null;
      isCameraWorking = false;
    }
    toggleVideoButtonClass();
  });
};

const stopCamera = (stream) => {
  const video = document.querySelector("video");
  console.log(stream, "--- stream? stopCamera");
  isCameraWorking = !isCameraWorking;

  if (stream) {
    const tracks = stream.getTracks();
    tracks.forEach((track) => track.stop());

    video.srcObject = null;

    isCameraWorking = false;
  }
  toggleVideoButtonClass();
};

const toggleVideoButtonClass = () => {
  console.log(isCameraWorking, "-- toggle button triggered..");

  const videoIcon = document.querySelector("#videoIcon");

  if (isCameraWorking) {
    videoIcon.classList.contains("photo--menu__btn__start") &&
      videoIcon.classList.remove("photo--menu__btn__start");
    videoIcon.classList.add("photo--menu__btn__stop");
  } else {
    videoIcon.classList.contains("photo--menu__btn__stop") &&
      videoIcon.classList.remove("photo--menu__btn__stop");
    videoIcon.classList.add("photo--menu__btn__start");
  }
};

const playCamera = async (stream) => {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
  } catch (err) {
    console.err("Error accessing camera: ", err);
  }
};
