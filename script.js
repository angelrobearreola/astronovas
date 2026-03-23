// CANVAS
const canvas = document.getElementById('galaxy');
const ctx = canvas.getContext('2d');

// AJUSTAR TAMAÑO
function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();

// ESTRELLAS
let stars = [];

function createStars(){
    stars = [];
    for(let i=0; i<400; i++){
        stars.push({
            x: Math.random()*canvas.width,
            y: Math.random()*canvas.height,
            radius: Math.random()*1.5,
            speed: Math.random()*0.5 + 0.2,
            depth: Math.random()*2 + 0.5
        });
    }
}

createStars();

// ANIMACIÓN PRINCIPAL
function animate() {

    // Fondo con efecto estela suave
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    ctx.fillRect(0,0,canvas.width,canvas.height);

    stars.forEach(s => {

        // Brillo dinámico
        const brightness = 200 + Math.random()*55;
        ctx.fillStyle = `rgb(${brightness},${brightness},${brightness})`;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI*2);
        ctx.fill();

        // Movimiento tipo espacio profundo
        s.y -= s.speed * s.depth;
        s.x -= s.speed * 0.2 * s.depth;

        // Reaparecer
        if(s.y < 0 || s.x < 0){
            s.x = Math.random()*canvas.width;
            s.y = canvas.height;
        }
    });

    // 🌠 Estrella fugaz ocasional
    if(Math.random() < 0.003){
        shootStar();
    }

    requestAnimationFrame(animate);
}

// 🌠 ESTRELLA FUGAZ PRO
function shootStar(){
    let x = Math.random()*canvas.width;
    let y = Math.random()*canvas.height/2;
    let length = Math.random()*250 + 100;
    let speed = 14;
    let opacity = 1;

    function draw(){
        ctx.strokeStyle = `rgba(255,255,255,${opacity})`;
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x - length, y + length);
        ctx.stroke();

        x -= speed;
        y += speed;
        opacity -= 0.02;

        if(opacity > 0){
            requestAnimationFrame(draw);
        }
    }

    draw();
}

// INICIAR
animate();

// RESIZE
window.addEventListener('resize', () => {
    resizeCanvas();
    createStars();
});

// BOTÓN SOBRE NOSOTROS
function abrirSobre() {
    window.open("sobre.html", "_blank");
}