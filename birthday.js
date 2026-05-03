// 🎂 CHECK
function isBirthday(day, month){
  const today = new Date();
  return today.getDate() === day && (today.getMonth() + 1) === month;
}


// 🎆 FIREWORK (ton canvas 👍)
function launchFireworks(){

  const canvas = document.createElement("canvas");
  canvas.id = "fireworks";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "9998";

  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  ctx.scale(dpr, dpr);


  const particles = [];

  function createExplosion(x, y){
    for(let i=0; i<80; i++){
      particles.push({
        x, y,
        angle: Math.random() * 2 * Math.PI,
        speed: Math.random() * 5 + 2,
        life: 100
      });
    }
  }


function animate(){

ctx.globalCompositeOperation = "lighter";

// léger fondu (effet traînée)
ctx.fillStyle = "rgba(0,0,0,0.15)";
ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, i) => {

    // mouvement
    p.x += Math.cos(p.angle) * p.speed;
    p.y += Math.sin(p.angle) * p.speed;
    p.life--;

    // 🎆 style glow
    ctx.fillStyle = `hsl(${Math.random()*360},100%,70%)`;
    ctx.shadowBlur = 12;
    ctx.shadowColor = ctx.fillStyle;

    // 🔥 dessin (CORRECT)
    ctx.beginPath();
    ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
    ctx.fill();

    if(p.life <= 0) particles.splice(i,1);
  });

  requestAnimationFrame(animate);
}



  setInterval(() => {
  createExplosion(
  Math.random() * window.innerWidth,
  Math.random() * window.innerHeight / 2
);
  }, 400);

  animate();

  setTimeout(() => {
    canvas.remove();
  }, 5000);
}


// 🎂 MAIN
function checkBirthday(config){

  if (!isBirthday(config.day, config.month)) return;

  // 🎂 MESSAGE
  const msg = document.createElement("div");
  msg.innerText = "🎂 Joyeux anniversaire Kiki !";
  msg.style.position = "fixed";
  msg.style.top = "20px";
  msg.style.left = "50%";
  msg.style.transform = "translateX(-50%)";
  msg.style.background = "#000";
  msg.style.color = "#fff";
  msg.style.padding = "10px 20px";
  msg.style.borderRadius = "10px";
  msg.style.zIndex = 9999;

  document.body.appendChild(msg);

  setTimeout(() => msg.remove(), 4000);

  // 🎆 FEU D'ARTIFICE
  launchFireworks();
}


// 🎂 CONFIG
checkBirthday({
  day: 3,
  month: 5
});