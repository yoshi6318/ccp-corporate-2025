//////////////

window.addEventListener("DOMContentLoaded", () => {
  init();
  init2();
});

function init() {
  const targetBlank = document.querySelector("#myCanvas");
  if (!targetBlank || typeof THREE === "undefined") return;

  const container = targetBlank.parentElement;
  const width = (container && container.clientWidth) || targetBlank.clientWidth || window.innerWidth;
  let height = targetBlank.clientHeight;
  // Fallback when canvas has no computed height (absolute positioned inside auto-height container)
  if (!height || height === 0) {
    height = innerWidth < 767 ? 150 : 200;
    if (container && (!container.style.height || container.clientHeight === 0)) {
      container.style.height = `${height}px`;
    }
  }
  if (innerWidth < 767) height = Math.max(height, 150);

  const renderer = new THREE.WebGLRenderer({
    canvas: targetBlank,
    antialias: true,
    alpha: true,
  });
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
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

  // Handle resize
  window.addEventListener("resize", () => {
    const w = (container && container.clientWidth) || window.innerWidth;
    const h = innerWidth < 767 ? 150 : (container && container.clientHeight) || height;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  });
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
  });
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  renderer.setSize(width, height);
  renderer.setClearColor(0x656565, 1);

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x999999, 100, 2000);

  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
  camera.position.set(0, 0, 1000);

  const group = new THREE.Group();
  scene.add(group);
  // Use valid segment counts so geometry is rendered
  const geometry = new THREE.SphereGeometry(60, 16, 12);

  for (let i = 0; i < 400; i++) {
    const mesh = new THREE.Mesh(
      geometry,
      new THREE.MeshPhongMaterial({ color: 0xbdbdbd, shininess: 20 })
    );
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

  window.addEventListener("resize", () => {
    const w = targetContainer.clientWidth;
    const h = innerWidth < 767 ? 200 : targetContainer.clientHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  });
}
