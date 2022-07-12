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
let sphereGroup, sphereLightGroup, camera;

import { Application } from "@splinetool/runtime";

const canvas = document.getElementById("canvas3d");
const app = new Application(canvas);

app.load("https://prod.spline.design/p6OqcnDa7N85sCvb/scene.splinecode")
.then(() => {
    // sphereGroup = app.findObjectByName("sphereGroup");
    // sphereLightGroup = app.findObjectByName("sphereLightGroup");
});










// animation sphere
ScrollTrigger.create({
  trigger: ".trigger__slide-is1",
  scroller: scrollerPage,
  start: "top center",
  end: "bottom center",
  onEnter: sphereOnEnter,
  onLeave: sphereLeave,
  onEnterBack: sphereOnEnterBack,
  onLeaveBack: sphereLeaveBack,
});

function sphereOnEnter() {
    console.log("sphereOnEnter")
    // sphereLightGroup.emitEvent("keyDown");
    // sphereGroup.emitEventReverse("keyDown");
};

function sphereOnEnterBack() {
    console.log("sphereOnEnterBack")
};

function sphereLeave() {
    console.log("sphereLeave")
    // sphereLightGroup.emitEventReverse("keyDown");
    // sphereGroup.emitEvent("keyDown");
};

function sphereLeaveBack() {
    console.log("sphereLeaveBack")
};







// animations pyramids
ScrollTrigger.create({
  trigger: ".trigger__slide-is2",
  scroller: scrollerPage,
  start: "top center",
  end: "bottom center",
  onEnter: pyramidsOnEnter,
  onLeave: pyramidsLeave,
  onEnterBack: pyramidsOnEnterBack,
  onLeaveBack: pyramidsLeaveBack,
});

function pyramidsOnEnter() {
    console.log("pyramidsOnEnter")
};

function pyramidsOnEnterBack() {
    console.log("pyramidsOnEnterBack")
};

function pyramidsLeave() {
    console.log("pyramidsLeave")
};

function pyramidsLeaveBack() {
    console.log("pyramidsLeaveBack")
};







// animations plates
ScrollTrigger.create({
  trigger: ".trigger__slide-is3",
  scroller: scrollerPage,
  start: "top center",
  end: "bottom center",
  onEnter: platesOnEnter,
  onLeave: platesLeave,
  onEnterBack: platesOnEnterBack,
  onLeaveBack: platesLeaveBack,
});

function platesOnEnter() {
    console.log("platesOnEnter")
};

function platesOnEnterBack() {
    console.log("platesOnEnterBack")
};

function platesLeave() {
    console.log("platesLeave")
};

function platesLeaveBack() {
    console.log("platesLeaveBack")
};
