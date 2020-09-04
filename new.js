let scene, camera, cube, renderer, loader;

init = () => {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    5,
    1000
  );

  //set up the web renderer , so using webgl

  renderer = new THREE.WebGLRenderer({ antialiase: false });

  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  var light = new THREE.AmbientLight(0x404040); // soft white light
  scene.add(light);

  //adding a geometric cube
  loader = new THREE.GLTFLoader();

  loader.load(
    "./scene.gltf",
    function (gltf) {
      scene.add(gltf.scene);
      console.log("the model is loaded ");
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  camera.position.y = 3;
  camera.position.z = 10;
};

init();
// animate = () => {
//   requestAnimationFrame(animate);
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;

//   renderer.render(scene, camera);
// };

// animate();

windowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
};

window.addEventListener("resize", windowResize, false);

window.addEventListener("wheel", onMouseWheel, false);

animate = () => {
  requestAnimationFrame(animate);
  scene.rotation.y += 0.01;

  renderer.render(scene, camera);
};

function onMouseWheel(event) {
  event.preventDefault();
  console.log("rotating ..");
  document.getElementById("testing").style.color = "red";

  //   cube.rotation.x += event.deltaY * 0.0005;
}

animate();
