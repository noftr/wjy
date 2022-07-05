let obj;

import { Application } from "@splinetool/runtime";


const canvas = document.getElementById("canvas3d");
const app = new Application(canvas);
app.load("https://prod.spline.design/C8v5wKSdTmx0JFF1/scene.splinecode")
.then(() => {
    obj = app.findObjectById("908e4bcc-4410-49e2-85a6-230d2c4fcd79");
    setTimeout(animationCube, 2000);
});

function animationCube() {
    obj.emitEvent("mouseDown");
    renderAnimation();
}

function renderAnimation() {
  console.log("начали цикл")
	obj.rotation.x += .005;
  window.requestAnimationFrame(renderAnimation);
}
