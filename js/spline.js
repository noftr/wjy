//fluid responsive for splinetool
let splineCanvas = document.querySelector("#canvas3d")
let numScale;
function scaleCanvas() {
		numScale = window.innerWidth / 1920;
		splineCanvas.style.transform = "scale3d("+numScale+", "+numScale+", 1)";
};
scaleCanvas();
window.addEventListener('resize', scaleCanvas);








//splinetool
let allScenes, allScenesGroup;

import { Application } from "@splinetool/runtime";

const canvas = document.getElementById("canvas3d");
const app = new Application(canvas);

app.load("https://prod.spline.design/34ZmaCalcE3GOCZL/scene.splinecode")
.then(() => {
    allScenes = app.findObjectByName("allScenes");
    allScenesGroup = app.findObjectByName("allScenesGroup");
});











// animation sphere
ScrollTrigger.create({
  trigger: ".trigger__slide-is1",
  scroller: scrollerPage,
  start: "top center",
  end: "bottom center",
  onEnter: sphereOnEnter,
  onEnterBack: sphereOnEnterBack,
  onLeaveBack: sphereLeaveBack,
  onLeave: sphereLeave,
});

function sphereOnEnter() {
    console.log("sphereOnEnter")
};

function sphereOnEnterBack() {
    console.log("sphereOnEnterBack")
};

function sphereLeaveBack() {
    console.log("sphereLeaveBack")
};

function sphereLeave() {
    console.log("sphereLeave")
};









// animations pyramids
ScrollTrigger.create({
  trigger: ".trigger__slide-is2",
  scroller: scrollerPage,
  start: "top center",
  end: "bottom center",
  onEnter: pyramidsOnEnter,
  onEnterBack: pyramidsOnEnterBack,
  onLeaveBack: pyramidsLeaveBack,
  onLeave: pyramidsLeave,
});

function pyramidsOnEnter() {
    console.log("pyramidsOnEnter");
    allScenes.emitEvent("keyDown");
};

function pyramidsOnEnterBack() {
    console.log("pyramidsOnEnterBack")
};

function pyramidsLeaveBack() {
    console.log("pyramidsLeaveBack")
    allScenes.emitEventReverse("keyDown");
};

function pyramidsLeave() {
    console.log("pyramidsLeave");
};









// animations plates
ScrollTrigger.create({
  trigger: ".trigger__slide-is3",
  scroller: scrollerPage,
  start: "top center",
  end: "bottom center",
  onEnter: platesOnEnter,
  onEnterBack: platesOnEnterBack,
  onLeaveBack: platesLeaveBack,
  onLeave: platesLeave,
});

function platesOnEnter() {
    console.log("platesOnEnter");
    allScenesGroup.emitEvent("keyDown");
};

function platesOnEnterBack() {
    console.log("platesOnEnterBack")
};

function platesLeaveBack() {
    console.log("platesLeaveBack")
    allScenesGroup.emitEventReverse("keyDown");
};

function platesLeave() {
    console.log("platesLeave");
};
