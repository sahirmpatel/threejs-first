let scene, camera, renderer, cube;

// // //creating scene and camera
// // //camera is of two types

// init = () => {
//   scene = new THREE.Scene();
//   camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
//   );

//   //   //set up the web renderer , so using webgl

//   renderer = new THREE.WebGLRenderer({ antialias: true });

//   renderer.setSize(window.innerWidth, window.innerHeight);

//   document.body.appendChild(renderer.domElement);

//   //   //adding a geometric cube

//   const geometry = new THREE.BoxGeometry(2, 2, 2);
//   const material = new THREE.MeshBasicMaterial({ color: 0x00fff0 });
//   // //mesh takes in the geometry and the matereial
//   cube = new THREE.Mesh(geometry, material);
//   scene.add(cube);

//   //   // var loader = new THREE.OBJLoader();
//   //   // loader.load(
//   //   //   "./247_House 15_obj.obj",

//   //   //   function (object) {
//   //   //     scene.add(object);
//   //   //   }
//   //   // );

//   //   // instantiate a loader
//   //   var loader = new THREE.OBJLoader();

//   //   // load a resource
//   //   loader.load(
//   //     // resource URL
//   //     "247_House 15_obj.obj",
//   //     // called when resource is loaded
//   //     function (object) {
//   //       scene.add(object);
//   //       renderer.render(scene, camera);
//   //     },
//   //     // called when loading is in progresses
//   //     function (xhr) {
//   //       console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
//   //     },
//   //     // called when loading has errors
//   //     function (error) {
//   //       console.log("An error happened");
//   //     }
//   //   );
// };

// init();

// windowResize = () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();

//   renderer.setSize(window.innerWidth, window.innerHeight);
// };

// window.addEventListener("resize", windowResize, false);

// window.addEventListener("wheel", onMouseWheel, false);

// animate = () => {
//   requestAnimationFrame(animate);
//   // cube.rotation.y += 0.01;

//   renderer.render(scene, camera);
// };

// function onMouseWheel(event) {
//   event.preventDefault();

//   // cube.rotation.y += event.deltaY * 0.0005;
// }

// animate();

// function init() {
//   scene = new THREE.Scene();
//   scene.background = new THREE.Color(0xdddddd);
//   camera = new THREE.PerspectiveCamera(
//     40,
//     window.innerWidth / window.innerHeight,
//     1,
//     5000
//   );
//   camera.rotation.y = (45 / 180) * Math.PI;
//   camera.position.x = 800;
//   camera.position.y = 100;
//   camera.position.z = 1000;
//   renderer = new THREE.WebGLRenderer({ antialias: true });
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   document.body.appendChild(renderer.domElement);

//   let loader = new THREE.GLTFLoader();
//   loader.load("CathedralGLB_GLTF.glb", function (gltf) {
//     car = gltf.scene.children[0];
//     car.scale.set(100, 100, 100);
//     scene.add(gltf.scene);
//     animate();
//   });
// }

// init();
// function animate() {
//   renderer.render(scene, camera);
//   requestAnimationFrame(animate);
// }

//creating scene and camera
//camera is of two types
init = () => {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  //set up the web renderer , so using webgl

  renderer = new THREE.WebGLRenderer({ antialiase: false });

  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  //adding a geometric cube

  const geometry = new THREE.BoxGeometry(3, 3, 3);
  // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  //mesh takes in the geometry and the matereial
  const texture = new THREE.TextureLoader().load(
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/decal/decal-diffuse.png"
  );
  const material = new THREE.MeshBasicMaterial({ map: texture });

  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;
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
  // cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};

function onMouseWheel(event) {
  event.preventDefault();

  cube.rotation.y += event.deltaY * 0.0005;
  cube.rotation.x += event.deltaY * 0.0005;
}

animate();
