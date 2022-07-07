

let sphereGroup, sphereLightGroup, camera;

import { Application } from "@splinetool/runtime";

const canvas = document.getElementById("canvas3d");
const app = new Application(canvas);
app.load("https://prod.spline.design/p6OqcnDa7N85sCvb/scene.splinecode")
.then(() => {
    sphereGroup = app.findObjectByName("sphereGroup");
    sphereLightGroup = app.findObjectByName("sphereLightGroup");
    camera = app.findObjectByName("camera");
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
    sphereGroup.emitEventReverse("keyDown");
    camera.emitEventReverse("keyDown");
};

function animationSphereOut() {
    console.log("animationSphereOut")
    sphereLightGroup.emitEventReverse("keyDown");
    sphereGroup.emitEvent("keyDown");
};

ScrollTrigger.create({
  trigger: ".trigger__slide-is2",
  scroller: scrollerPage,
  start: "top center",
  end: "bottom center",
  onEnter: animationTriangleIn,
  onLeave: animationTriangleOut,
  onEnterBack: animationTriangleIn,
  onLeaveBack: animationTriangleOut,
});

function animationTriangleIn() {
    console.log("animationTriangleIn")
    camera.emitEvent("keyDown");
};

function animationTriangleOut() {
    console.log("animationTriangleOut")
};

ScrollTrigger.create({
  trigger: ".trigger__slide-is3",
  scroller: scrollerPage,
  start: "top center",
  end: "bottom center",
  onEnter: animationLayersIn,
  onLeave: animationLayersOut,
  onEnterBack: animationLayersIn,
  onLeaveBack: animationLayersOut
});

function animationLayersIn() {
    console.log("animationLayersIn")
};

function animationLayersOut() {
    console.log("animationLayersOut")
};
