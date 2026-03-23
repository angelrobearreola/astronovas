const canvas = document.getElementById('galaxy');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for(let i=0; i<200; i++){
    stars.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        radius: Math.random()*1.5,
        speed: Math.random()*0.5 + 0.2
    });
}

function animate() {
    ctx.fillStyle = 'rgba(0,0,0,0.2)';
    ctx.fillRect(0,0,canvas.width,canvas.height);

    stars.forEach(s => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI*2);
        ctx.fillStyle = '#fff';
        ctx.fill();
        s.y -= s.speed;
        if(s.y < 0) s.y = canvas.height;
    });

    // Estrella fugaz
    if(Math.random() < 0.005){
        shootStar();
    }

    requestAnimationFrame(animate);
}

function shootStar(){
    let x = Math.random()*canvas.width;
    let y = Math.random()*canvas.height/2;
    let length = Math.random()*200 + 100;
    let speed = 10;

    function draw(){
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x - length, y + length);
        ctx.stroke();
        x -= speed;
        y += speed;
        if(x > -length && y < canvas.height + length){
            requestAnimationFrame(draw);
        }
    }
    draw();
}

animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
function abrirSobre() {
    window.open("sobre.html", "_blank");
}
