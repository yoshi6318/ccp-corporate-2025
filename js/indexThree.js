//////////////

window.addEventListener("DOMContentLoaded", () => {
  init();
  init2();
});

function init() {
  const targetBlank = document.querySelector("#myCanvas");
  if (!targetBlank || typeof THREE === "undefined") return;

  const width = targetBlank.clientWidth;
  let height = targetBlank.clientHeight;
  if (innerWidth < 767) height = 150;

  const renderer = new THREE.WebGLRenderer({
    canvas: targetBlank,
    antialias: true,
    alpha: true,
    devicePixelRatio: window.devicePixelRatio,
  });
  renderer.setSize(width, height);
  renderer.setClearColor(0xffffff, 1);

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x444444, 100, 1500);

  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
  camera.position.set(0, 0, 1000);

  const group = new THREE.Group();
  scene.add(group);
  const geometry = new THREE.SphereGeometry(20, 50, 50);

  for (let i = 0; i < 400; i++) {
    const mesh = new THREE.Mesh(geometry);
    mesh.position.x = (Math.random() - 0.5) * 2000;
    mesh.position.y = (Math.random() - 0.5) * 2000;
    mesh.position.z = (Math.random() - 0.5) * 2000;
    mesh.rotation.x = Math.random() * 2 * Math.PI;
    mesh.rotation.y = Math.random() * 2 * Math.PI;
    mesh.rotation.z = Math.random() * 2 * Math.PI;
    group.add(mesh);
  }

  scene.add(new THREE.DirectionalLight(0xffffff, 1));
  scene.add(new THREE.AmbientLight(0xaaaaaa));

  function tick() {
    group.rotateY(0.0005);
    group.rotateX(0.0005);
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }
  tick();
}

function init2() {
  const targetContainer = document.querySelector(".member-bottom-link");
  const canvas = document.querySelector("#myCanvas2");
  if (!targetContainer || !canvas || typeof THREE === "undefined") return;

  const width = targetContainer.clientWidth;
  let height = targetContainer.clientHeight;
  if (innerWidth < 767) height = 200;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    devicePixelRatio: window.devicePixelRatio,
  });
  renderer.setSize(width, height);
  renderer.setClearColor(0x656565, 1);

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x999999, 100, 2000);

  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
  camera.position.set(0, 0, 1000);

  const group = new THREE.Group();
  scene.add(group);
  const geometry = new THREE.SphereGeometry(60, 0, 0);

  for (let i = 0; i < 400; i++) {
    const mesh = new THREE.Mesh(geometry);
    mesh.position.x = (Math.random() - 0.5) * 3000;
    mesh.position.y = (Math.random() - 0.5) * 3000;
    mesh.position.z = (Math.random() - 0.5) * 3000;
    mesh.rotation.x = Math.random() * 2 * Math.PI;
    mesh.rotation.y = Math.random() * 2 * Math.PI;
    mesh.rotation.z = Math.random() * 2 * Math.PI;
    group.add(mesh);
  }

  scene.add(new THREE.DirectionalLight(0xffffff, 1));
  scene.add(new THREE.AmbientLight(0xaaaaaa));

  function tick() {
    group.rotateY(0.001);
    group.rotateX(0.001);
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }
  tick();
}
