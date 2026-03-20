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