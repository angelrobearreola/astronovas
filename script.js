const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("galaxy-bg").appendChild(renderer.domElement);

// ESTRELLAS
const starsGeometry = new THREE.BufferGeometry();
const starCount = 6000;
const positions = [];

for (let i = 0; i < starCount; i++) {
  positions.push((Math.random() - 0.5) * 1000);
  positions.push((Math.random() - 0.5) * 1000);
  positions.push((Math.random() - 0.5) * 1000);
}

starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.7 });
const stars = new THREE.Points(starsGeometry, starsMaterial);
scene.add(stars);

// PLANETAS
const planets = [];
for (let i = 0; i < 3; i++) {
  const geo = new THREE.SphereGeometry(2, 32, 32);
  const mat = new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff });
  const planet = new THREE.Mesh(geo, mat);
  planet.position.x = (i + 1) * 10;
  planets.push(planet);
  scene.add(planet);
}

// ESTRELLA FUGAZ
let shootingStar = new THREE.Mesh(
  new THREE.SphereGeometry(0.3),
  new THREE.MeshBasicMaterial({ color: 0xffffff })
);
scene.add(shootingStar);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  stars.rotation.y += 0.0005;

  planets.forEach((p, i) => {
    p.rotation.y += 0.01;
    p.position.x = Math.cos(Date.now() * 0.0003 + i) * 15;
    p.position.z = Math.sin(Date.now() * 0.0003 + i) * 15;
  });

  // estrella fugaz
  shootingStar.position.x += 0.5;
  shootingStar.position.y -= 0.3;

  if (shootingStar.position.x > 50) {
    shootingStar.position.x = -50;
    shootingStar.position.y = Math.random() * 20;
  }

  renderer.render(scene, camera);
}

animate();
