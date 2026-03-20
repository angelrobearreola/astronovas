// 🌌 estrellas
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 150; i++) {
    stars.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        size: Math.random()*2
    });
}

function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    stars.forEach(s => {
        ctx.fillStyle = "white";
        ctx.fillRect(s.x,s.y,s.size,s.size);
    });

    requestAnimationFrame(draw);
}

draw();


// ✨ scroll animación
const sections = document.querySelectorAll(".fade-section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
            sec.classList.add("visible");
        }
    });
});


// ⌨️ efecto typing
const text = "Explora el universo, expande tu mente.";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 40);
    }
}
typing();


// 📩 formulario
document.getElementById("form").addEventListener("submit", e => {
    e.preventDefault();
    alert("🚀 Registro enviado correctamente");
});