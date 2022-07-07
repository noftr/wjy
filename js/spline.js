

let sphereLight1, sphereLight2, sphereGroup, sphereLightGroup;

import { Application } from "@splinetool/runtime";

const canvas = document.getElementById("canvas3d");
const app = new Application(canvas);
app.load("https://prod.spline.design/p6OqcnDa7N85sCvb/scene.splinecode")
.then(() => {
    sphereLight1 = app.findObjectByName("sphereLight1");
    sphereLight2 = app.findObjectByName("sphereLight2");
    sphereGroup = app.findObjectByName("sphereGroup");
    sphereLightGroup = app.findObjectByName("sphereLightGroup");
});

ScrollTrigger.create({
  trigger: ".trigger__slide-is1",
  scroller: scrollerPage,
  start: "top center",
  end: "bottom center",
  onEnter: animationSphereIn,
  onLeave: animationSphereOut,
  onEnterBack: animationSphereIn,
  onLeaveBack: animationSphereOut,
});

function animationSphereIn() {
    console.log("animationSphereIn")
    sphereLightGroup.emitEvent("keyDown");
};

function animationSphereOut() {
    console.log("animationSphereOut")
    sphereLightGroup.emitEventReverse("keyDown");
};

ScrollTrigger.create({
  trigger: ".trigger__slide-is2",
  scroller: scrollerPage,
  start: "top center",
  end: "bottom center",
  // onEnter: animationSphereIn,
  // onLeave: animationSphereOut,
  // onEnterBack: animationSphereIn,
  // onLeaveBack: animationSphereOut,
});

function animationTriangleIn() {
    console.log("animationTriangleIn")
};

function animationTriangleOut() {
    console.log("animationTriangleOut")
};

ScrollTrigger.create({
  trigger: ".trigger__slide-is3",
  scroller: scrollerPage,
  start: "top center",
  end: "bottom center",
  // onEnter: animationSphereIn,
  // onLeave: animationSphereOut,
  // onEnterBack: animationSphereIn,
  // onLeaveBack: animationSphereOut
});

function animationLayersIn() {
    console.log("animationLayersIn")
};

function animationLayersOut() {
    console.log("animationLayersOut")
};
