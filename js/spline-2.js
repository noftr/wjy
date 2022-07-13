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










let whereTriggerActive = 0;
let pastTrigger = 0;
let playAnimation = false;

startAnimationScenes();
function startAnimationScenes() {

		if (playAnimation == false){
				switch (whereTriggerActive) {
						case 0:
								switch (pastTrigger) {
										case 1:
												playAnimation = true;
												out1();
												setTimeout(() => {
														pastTrigger = 0;
														playAnimation = false;
												}, 3000);
												break

										case 2:
												playAnimation = true;
												allScenes.emitEventReverse("keyDown");
												out2();
												setTimeout(() => {
														pastTrigger = 0;
														playAnimation = false;
												}, 3000);
												break

										case 3:
												playAnimation = true;
												allScenes.emitEventReverse("keyDown");
												allScenesGroup.emitEventReverse("keyDown");
												out3();
												setTimeout(() => {
														pastTrigger = 0;
														playAnimation = false;
												}, 3000);
												break
								};
								break

						case 1:
								switch (pastTrigger) {
										case 0:
												playAnimation = true;
												in1();
												setTimeout(() => {
														pastTrigger = 1;
														playAnimation = false;
												}, 3000);
												break

										case 2:
												playAnimation = true;
												out2();
												setTimeout(() => {
														allScenes.emitEventReverse("keyDown");
														in1();
														setTimeout(() => {
																pastTrigger = 1;
																playAnimation = false;
														}, 3000);
												}, 3000);
												break

										case 3:
												playAnimation = true;
												out3();
												setTimeout(() => {
														allScenes.emitEventReverse("keyDown");
														allScenesGroup.emitEventReverse("keyDown");
														in1();
														setTimeout(() => {
																pastTrigger = 1;
																playAnimation = false;
														}, 3000);
												}, 3000);
												break
								};
								break

						case 2:
								switch (pastTrigger) {
										case 0:
												playAnimation = true;
												allScenes.emitEvent("keyDown");
												in2();
												setTimeout(() => {
														pastTrigger = 2;
														playAnimation = false;
												}, 3000);
												break

										case 1:
												playAnimation = true;
												out1();
												setTimeout(() => {
														allScenes.emitEvent("keyDown");
														in2();
														setTimeout(() => {
																pastTrigger = 2;
																playAnimation = false;
														}, 3000);
												}, 3000);
												break

										case 3:
												playAnimation = true;
												out3();
												setTimeout(() => {
														allScenesGroup.emitEventReverse("keyDown");
														in2();
														setTimeout(() => {
																pastTrigger = 2;
																playAnimation = false;
														}, 3000);
												}, 3000);
												break
								};
								break

						case 3:
								switch (pastTrigger) {
										case 0:
												playAnimation = true;
												allScenes.emitEvent("keyDown");
												allScenesGroup.emitEvent("keyDown");
												in3();
												setTimeout(() => {
														pastTrigger = 3;
														playAnimation = false;
												}, 3000);
												break

										case 1:
												playAnimation = true;
												out1();
												setTimeout(() => {
														allScenes.emitEvent("keyDown");
														allScenesGroup.emitEvent("keyDown");
														in3();
														setTimeout(() => {
																pastTrigger = 3;
																playAnimation = false;
														}, 3000);
												}, 3000);
												break

										case 2:
												playAnimation = true;
												out2();
												setTimeout(() => {
														allScenesGroup.emitEvent("keyDown");
														in3();
														setTimeout(() => {
																pastTrigger = 3;
																playAnimation = false;
														}, 3000);
												}, 3000);
												break
								};
								break
				}
		};
		requestAnimationFrame(startAnimationScenes);
};


function in1() {
		sphereLightGroup.emitEvent("keyDown");
		sphereGroup.emitEventReverse("keyDown");
		console.log("in1")
};

function out1() {
		sphereLightGroup.emitEventReverse("keyDown");
		sphereGroup.emitEvent("keyDown");
		console.log("out1")
}

function in2() {
		setTimeout(() => {
				pyramidPointLight.emitEvent("keyDown");
		}, 1000);
		pyramid1.emitEvent("keyDown");
		pyramid2.emitEvent("keyDown");
		pyramid3.emitEvent("keyDown");
		mlp.emitEvent("keyDown");
		desirable.emitEvent("keyDown");
		viable.emitEvent("keyDown");
		feasible.emitEvent("keyDown");
		console.log("in2")
};

function out2() {
		pyramidPointLight.emitEventReverse("keyDown");
		pyramid1.emitEventReverse("keyDown");
		pyramid2.emitEventReverse("keyDown");
		pyramid3.emitEventReverse("keyDown");
		mlp.emitEventReverse("keyDown");
		desirable.emitEventReverse("keyDown");
		viable.emitEventReverse("keyDown");
		feasible.emitEventReverse("keyDown");
		console.log("out2")
}

function in3() {
		document.querySelector('.canvas-container').style.width = "2px"
		console.log("in3")
};

function out3() {
		console.log("out3")
}







// animation sphere
ScrollTrigger.create({
	  trigger: ".trigger__slide-is1",
	  scroller: scrollerPage,
	  start: "top center",
	  end: "bottom center",
	  onEnter: setTrigger1,
	  onEnterBack: setTrigger1,
	  onLeaveBack: setTrigger0,
});

ScrollTrigger.create({
	  trigger: ".trigger__slide-is2",
	  scroller: scrollerPage,
	  start: "top center",
	  end: "bottom center",
	  onEnter: setTrigger2,
	  onEnterBack: setTrigger2,
});

ScrollTrigger.create({
	  trigger: ".trigger__slide-is3",
	  scroller: scrollerPage,
	  start: "top center",
	  end: "bottom center",
	  onEnter: setTrigger3,
	  onEnterBack: setTrigger3,
	  onLeave: setTrigger0,
});


function setTrigger0() {
		whereTriggerActive = 0;
};

function setTrigger1() {
		whereTriggerActive = 1;
};

function setTrigger2() {
		whereTriggerActive = 2;
};

function setTrigger3() {
		whereTriggerActive = 3;
};
