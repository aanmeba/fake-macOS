import { appendCh, createEl } from "./utilities/dom.js";

let isCameraWorking = true;

export const runPhotoBooth = async () => {
  console.log("photo booth.... ");

  /** create photo booth window */
  const video = createEl("video");
  video.setAttribute("autoplay", "");

  const bottomMenu = createEl("div", "", "photo--menu");
  const btn = createEl("button", "", "photo--menu__btn");
  const videoIcon = createEl("div", "", "photo--menu__btn__stop");
  videoIcon.setAttribute("id", "videoIcon");

  appendCh(video, document.querySelector(".modal"));
  appendCh(bottomMenu, document.querySelector(".modal"));
  appendCh(btn, document.querySelector(".photo--menu"));
  appendCh(videoIcon, document.querySelector(".photo--menu__btn"));

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

  toggleBtn.addEventListener("click", () => {
    isCameraWorking = !isCameraWorking;
    toggleVideoButtonClass();

    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      videoElement.srcObject = null;

      isCameraWorking = false;
      toggleVideoButtonClass();
    }
  });
};

const toggleVideoButtonClass = () => {
  console.log(isCameraWorking, "-- toggle button triggered..");

  const videoIcon = document.querySelector("#videoIcon");

  if (isCameraWorking) {
    videoIcon.classList.contains("photo--menu__btn__start") &&
      videoIcon.classList.remove("photo--menu__btn__start");
    videoIcon.classList.add("photo--menu__btn__stop");
  } else {
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
