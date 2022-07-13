//fluid responsive for splinetool
let splineCanvas = document.querySelector("#canvas3d")
let numScale;
function scaleCanvas() {
		numScale = window.innerWidth / 1920;
		splineCanvas.style.transform = "scale3d("+numScale+", "+numScale+", 1)";
};
scaleCanvas();
window.addEventListener('resize', scaleCanvas);





//allScenes
let allScenes, allScenesGroup;
//sphere
let sphereLightGroup, sphereGroup;
//pyramids
let pyramidPointLight, pyramid1, pyramid2, pyramid3, mlp, desirable, viable, feasible;
//plates

//list of setTimeout
let timerPyramidsOnEnter, timerPyramidsOnEnterBack, timerPyramidsLeaveBack, timerPlatesLeaveBack;





import { Application } from "@splinetool/runtime";

const canvas = document.getElementById("canvas3d");
const app = new Application(canvas);

app.load('https://prod.spline.design/2ofCLegPKjR2TqqZ/scene.splinecode')
.then(() => {
		app.setSize(1920, 1440);

		// move allScenes
    allScenes = app.findObjectByName("allScenes");
    allScenesGroup = app.findObjectByName("allScenesGroup");

		//sphere animations
    sphereLightGroup = app.findObjectByName("sphereLightGroup");
    sphereGroup = app.findObjectByName("sphereGroup");

		// pyramids animations
		pyramidPointLight = app.findObjectByName("pyramidPointLight");
		pyramid1 = app.findObjectByName("pyramid1");
		pyramid2 = app.findObjectByName("pyramid2");
		pyramid3 = app.findObjectByName("pyramid3");
		mlp = app.findObjectByName("MLP");
		desirable = app.findObjectByName("Desirable");
		viable = app.findObjectByName("Viable");
		feasible = app.findObjectByName("Feasible");
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
    sphereLightGroup.emitEvent("keyDown");
    sphereGroup.emitEventReverse("keyDown");
    console.log("sphereOnEnter");
};

function sphereOnEnterBack() {
		sphereGroup.emitEventReverse("keyDown");
		setTimeout(() => {
				sphereLightGroup.emitEvent("keyDown");
		}, 1100);
    console.log("sphereOnEnterBack")
		clearTimeout(timerPyramidsOnEnterBack);
		clearTimeout(timerPyramidsOnEnter);
};

function sphereLeaveBack() {
		sphereLightGroup.emitEventReverse("keyDown");
		sphereGroup.emitEvent("keyDown");
    console.log("sphereLeaveBack")
};

function sphereLeave() {
		sphereLightGroup.emitEventReverse("keyDown");
		sphereGroup.emitEvent("keyDown");
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

		timerPyramidsOnEnter = setTimeout(() => {
				clearTimeout(timerPyramidsLeaveBack);
		    allScenes.emitEvent("keyDown");

				pyramidPointLight.emitEvent("keyDown");
				pyramid1.emitEvent("keyDown");
				pyramid2.emitEvent("keyDown");
				pyramid3.emitEvent("keyDown");
				mlp.emitEvent("keyDown");
				desirable.emitEvent("keyDown");
				viable.emitEvent("keyDown");
				feasible.emitEvent("keyDown");
		}, 1100);
};

function pyramidsOnEnterBack() {
    console.log("pyramidsOnEnterBack");

		timerPyramidsOnEnterBack = setTimeout(() => {
				pyramidPointLight.emitEvent("keyDown");
				pyramid1.emitEvent("keyDown");
				pyramid2.emitEvent("keyDown");
				pyramid3.emitEvent("keyDown");
				mlp.emitEvent("keyDown");
				desirable.emitEvent("keyDown");
				viable.emitEvent("keyDown");
				feasible.emitEvent("keyDown");
		}, 1100);
};

function pyramidsLeaveBack() {
		clearTimeout(timerPyramidsOnEnterBack);
		clearTimeout(timerPyramidsOnEnter);

    console.log("pyramidsLeaveBack")
		timerPyramidsLeaveBack = setTimeout(() => {
    		allScenes.emitEventReverse("keyDown");
		}, 1650);

		pyramidPointLight.emitEventReverse("keyDown");
		pyramid1.emitEventReverse("keyDown");
		pyramid2.emitEventReverse("keyDown");
		pyramid3.emitEventReverse("keyDown");
		mlp.emitEventReverse("keyDown");
		desirable.emitEventReverse("keyDown");
		viable.emitEventReverse("keyDown");
		feasible.emitEventReverse("keyDown");
};

function pyramidsLeave() {
		clearTimeout(timerPyramidsOnEnterBack);
		clearTimeout(timerPyramidsOnEnter);

    console.log("pyramidsLeave");

		pyramidPointLight.emitEventReverse("keyDown");
		pyramid1.emitEventReverse("keyDown");
		pyramid2.emitEventReverse("keyDown");
		pyramid3.emitEventReverse("keyDown");
		mlp.emitEventReverse("keyDown");
		desirable.emitEventReverse("keyDown");
		viable.emitEventReverse("keyDown");
		feasible.emitEventReverse("keyDown");
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
		clearTimeout(timerPlatesLeaveBack);
    allScenesGroup.emitEvent("keyDown");
    console.log("platesOnEnter");
};

function platesOnEnterBack() {
    console.log("platesOnEnterBack")
};

function platesLeaveBack() {
    console.log("platesLeaveBack");
		timerPlatesLeaveBack = setTimeout(() => {
				allScenesGroup.emitEventReverse("keyDown");
		}, 1650);
};

function platesLeave() {
    console.log("platesLeave");
};
