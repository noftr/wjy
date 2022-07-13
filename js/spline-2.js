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






let playAnimation = false;

let whoPlayAnimation;

whoPlayAnimation = 1;
whoPlayAnimation = 2;
whoPlayAnimation = 3;

let whoPlayNext;

whoPlayAnimation = 1;
whoPlayAnimation = 2;
whoPlayAnimation = 3;
