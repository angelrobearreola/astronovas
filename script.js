// 🌌 Espacio animado
const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 300; i++) {
    stars.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        size: Math.random()*2,
        speed: Math.random()*0.5
    });
}

function animateStars() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    stars.forEach(s => {
        s.y += s.speed;
        if (s.y > canvas.height) s.y = 0;

        ctx.fillStyle = "white";
        ctx.fillRect(s.x, s.y, s.size, s.size);
    });

    requestAnimationFrame(animateStars);
}

animateStars();

// ✨ Scroll animations
const elements = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});

// ⌨️ Efecto typing
const text = "Explora el universo. Comprende la realidad.";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 35);
    }
}
typing();

// 📩 Formulario
document.getElementById("form").addEventListener("submit", e => {
    e.preventDefault();
    alert("🚀 Bienvenido a Astronovas");
});