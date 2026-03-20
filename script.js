window.onload = function () {

  // SCROLL SUAVE
  window.scrollToSection = function(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }

  // BOTÓN
  window.joinAlert = function() {
    alert("Bienvenido a Astronovas 🚀");
  }

  // ANIMACIÓN SCROLL
  const faders = document.querySelectorAll(".fade");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  faders.forEach(el => observer.observe(el));

  // ESTRELLAS
  const canvas = document.getElementById("stars");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let stars = [];

  for (let i = 0; i < 300; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5
    });
  }

  function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";

    stars.forEach(s => {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(animateStars);
  }

  animateStars();
};
window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  const canvas = document.getElementById("stars");

  canvas.style.transform = `translateY(${scroll * 0.3}px)`;
});
document.addEventListener("mousemove", (e) => {
  const ctx = document.getElementById("stars").getContext("2d");

  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(e.clientX, e.clientY, 1.5, 0, Math.PI * 2);
  ctx.fill();
});
// GALAXIA 3D
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById("galaxy-bg").appendChild(renderer.domElement);

// CREAR ESTRELLAS (galaxia)
const starsGeometry = new THREE.BufferGeometry();
const starCount = 5000;

const positions = [];

for (let i = 0; i < starCount; i++) {
  positions.push((Math.random() - 0.5) * 1000);
  positions.push((Math.random() - 0.5) * 1000);
  positions.push((Math.random() - 0.5) * 1000);
}

starsGeometry.setAttribute(
  'position',
  new THREE.Float32BufferAttribute(positions, 3)
);

const starsMaterial = new THREE.PointsMaterial({
  color: 0xffffff,
  size: 0.7
});

const stars = new THREE.Points(starsGeometry, starsMaterial);
scene.add(stars);

camera.position.z = 5;

// ANIMACIÓN
function animateGalaxy() {
  requestAnimationFrame(animateGalaxy);

  stars.rotation.y += 0.0005;
  stars.rotation.x += 0.0002;

  renderer.render(scene, camera);
}

animateGalaxy();