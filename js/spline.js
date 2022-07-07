

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
    setTimeout(animationSphereIn, 4000);
    setTimeout(animationSphereOut, 80000);
});

function animationSphereIn() {
    console.log("запустили 1 анимацию")
    sphereLightGroup.emitEvent("keyDown");
};

function animationSphereOut() {
    console.log("запустили 2 анимацию")
    sphereLightGroup.emitEvent("keyDown");
};
