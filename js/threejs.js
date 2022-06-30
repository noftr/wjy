
let scene, camera, renderer, controls, targetY, targetX;

let params = {
  cameraRange: 162.5,
  cameraFov: 40,
  rotX: 0,
  rotY: 0,
  xrangeBefore: -20,
  xrangeTo: 10,
  yrangeBefore: 3,
  yrangeTo: -3,
  timeLerp: 0.04,
  metalness: 1,
  roughness: 0.05,
  envMapIntensity: 10,
  opacity: 1,
  activateRender: false,
};

let threejsCanvas = document.querySelector('#threejsCanvas');

function getAspectRatio() {
  const {innerWidth, innerHeight} = window;
  return innerWidth / innerHeight;
};

function onResize() {
  camera.aspect = getAspectRatio();
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

let mousePos = {x:0, y:0};
let mouseOnCanvas = false;
let mouseOutCanvas = true;

function handleMouseMove (event) {
	let tx = -1 + (event.offsetX / threejsCanvas.offsetWidth)*2;
	let ty = 1 - (event.offsetY / threejsCanvas.offsetHeight)*2;
	mousePos = {x:tx, y:ty};
};

function updatePosObject() {
	targetY = normalize(mousePos.y, -.95, .95, params.xrangeBefore, params.xrangeTo);
	targetX = normalize(mousePos.x, -.95, .95, params.yrangeBefore, params.yrangeTo);
};

function lerp(start, end, t) {
  return start * (1 - t) + end * t
};

function normalize(v,vmin,vmax,tmin, tmax) {
	let nv = Math.max(Math.min(v,vmax), vmin);
	let dv = vmax-vmin;
	let pc = (nv-vmin)/dv;
	let dt = tmax-tmin;
	let tv = tmin + (pc*dt);
	return tv;
};

function init() {

  threejsCanvas.onmouseenter = function(event) {
      // params.activateRender = true;
	    mouseOnCanvas = true;
    	document.addEventListener('mousemove', handleMouseMove, false);
      requestAnimationFrame(render);
      // clearTimeout(deactivateRender);
  };
  threejsCanvas.onmouseleave = function(event) {
      // deactivateRender = setTimeout(function() {
      //   params.activateRender = false;
      // }, 500)
		  mouseOnCanvas = false;
		  document.removeEventListener('mousemove', handleMouseMove, false);
	};

  window.addEventListener('resize', onResize);

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(params.cameraFov, getAspectRatio(), 0.1, 2500);
  camera.position.z = params.cameraRange;

  urls = [
      "https://uploads-ssl.webflow.com/623b1bd423accac5164f330f/623f12d77d194815a4ab47c2_px.jpg",
      "https://uploads-ssl.webflow.com/623b1bd423accac5164f330f/623f12d7359c639151bee9a8_nx.jpg",
      "https://uploads-ssl.webflow.com/623b1bd423accac5164f330f/623f12d77d19483184ab47c3_py.jpg",
      "https://uploads-ssl.webflow.com/623b1bd423accac5164f330f/623f12d727910d71f7547818_ny.jpg",
      "https://uploads-ssl.webflow.com/623b1bd423accac5164f330f/623f12d7761aa73725041c01_pz.jpg",
      "https://uploads-ssl.webflow.com/623b1bd423accac5164f330f/623f12d771fa7016b98f32c1_nz.jpg"
  ];

  textureCube = new THREE.CubeTextureLoader().load(urls);
  textureCube.format = THREE.RGBFormat;

  modelMaterial = new THREE.MeshPhysicalMaterial({
    envMap: textureCube,
    color: 0xffffff,
    metalness: params.metalness,
    roughness: params.roughness,
    envMapIntensity: 10,
    premultipliedAlpha: true,
    envMapIntensity: params.envMapIntensity,
    transparent: true,
    opacity: params.opacity,
  });

  renderer = new THREE.WebGLRenderer({
    canvas: threejsCanvas,
    antialias: true,
    alpha: true,
    stencil: true,
    depth:true,
    powerPreference:"high-performance"
  });
  renderer.setSize(window.innerWidth/10, window.innerHeight/10);
  renderer.setClearColor( 0x000000, 0 );
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.toneMapping = THREE.CineonToneMapping;

  function updateCamera() {
    camera.updateProjectionMatrix();
  };

  const gltfLoader = new THREE.GLTFLoader();

  gltfLoader.load("https://assets.codepen.io/22914/portal-2.glb", (gltf) => {
    scene.add(gltf.scene);
  });

	loadOBJ();

};




const loadOBJ = function(){

	loader = new THREE.OBJLoader();
	loader.load( 'https://raw.githubusercontent.com/noftr/three.js/main/obj-repeat-optimized-3.obj', addModelInScene);

};

const addModelInScene = function(object) {

	modelRedis = object;

	modelRedis.rotation.x = 0;
	modelRedis.position.y = -5;
	modelRedis.position.z = 0;
  modelRedis.scale.set(0.2,0.2,0.2)
  modelRedis.rotation.set(0,0,0)

	object.traverse( function(child) {
		if ( child.isMesh ) {
      child.material = modelMaterial;
    }
	});

	scene.add(modelRedis);

	render();
};

function render() {

		updatePosObject();
    lerpPosX = lerp(params.rotX, ((targetY-modelRedis.position.y)*0.1), params.timeLerp);
    lerpPosY = lerp(params.rotY, ((targetX-modelRedis.position.x)*0.1), params.timeLerp);
    params.rotX = lerpPosX;
    params.rotY = lerpPosY;
    mouseOutCanvas = false;

    modelRedis.rotation.x = params.rotX;
    modelRedis.rotation.y = params.rotY;
    modelMaterial.metalness = params.metalness;
    modelMaterial.roughness = params.roughness;
    modelMaterial.opacity = params.opacity;

    vertigoWidth = 85;
    vertigoDistance = vertigoWidth / (2*Math.tan(THREE.MathUtils.degToRad(params.cameraFov * 0.5)));

    camera.fov = params.cameraFov;
    camera.position.z = vertigoDistance;
    camera.updateProjectionMatrix();

    renderer.render(scene, camera);
    TWEEN.update();

    requestAnimationFrame(render);

};

init().then(render);
