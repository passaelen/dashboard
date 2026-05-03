// 🎂 CHECK
function isBirthday(day, month){
  const today = new Date();
  return today.getDate() === day && (today.getMonth() + 1) === month;
}


// 🎆 FIREWORK (mon canvas 👍)
function launchFireworks(){

  const canvas = document.createElement("canvas");
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");

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
    for(let i=0; i<50; i++){ // 🔥 réduit pour mobile
      particles.push({
        x, y,
        angle: Math.random() * 2 * Math.PI,
        speed: Math.random() * 4 + 2,
        life: 50
      });
    }
  }

  function animate(){

    // 🔥 reset propre (évite écran blanc)
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "rgba(0,0,0,0.15)";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    // 🔥 glow ensuite
    ctx.globalCompositeOperation = "lighter";

    for(let i = particles.length - 1; i >= 0; i--){

      const p = particles[i];

      p.x += Math.cos(p.angle) * p.speed;
      p.y += Math.sin(p.angle) * p.speed;
      p.life--;

      const hue = Math.random() * 360;

      ctx.fillStyle = `hsl(${hue},100%,60%)`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = ctx.fillStyle;

      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fill();

      if(p.life <= 0){
        particles.splice(i,1);
      }
    }

    requestAnimationFrame(animate);
  }

  // 🔥 moins fréquent = plus fluide
  const interval = setInterval(() => {

    if(particles.length < 300){ // 🔥 limite sécurité
      createExplosion(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight * 0.5
      );
    }

  }, 500);

  animate();

  setTimeout(() => {
    clearInterval(interval);
    canvas.remove();
  }, 5000);
}


// 🎂 MAIN
function checkBirthday(config){

  if (!isBirthday(config.day, config.month)) return;

  // 🎂 MESSAGE
  const msg = document.createElement("div");
  msg.innerText = "🎂 Joyeux anniversaire !";
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