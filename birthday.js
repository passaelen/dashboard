function isBirthday(day, month){
  const today = new Date();
  return today.getDate() === day && (today.getMonth() + 1) === month;
}

function launchFireworks(){

  const canvas = document.createElement("canvas");
  canvas.id = "fireworks";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

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
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
      p.x += Math.cos(p.angle) * p.speed;
      p.y += Math.sin(p.angle) * p.speed;
      p.life--;

      ctx.fillStyle = `hsl(${Math.random()*360},100%,60%)`;
      ctx.fillRect(p.x, p.y, 3, 3);

      if(p.life <= 0) particles.splice(i,1);
    });

    requestAnimationFrame(animate);
  }

  setInterval(() => {
    createExplosion(
      Math.random() * canvas.width,
      Math.random() * canvas.height / 2
    );
  }, 400);

  animate();

  setTimeout(() => {
    canvas.remove();
  }, 5000);
}

function checkBirthday(config){

  if(isBirthday(config.day, config.month)){
    launchFireworks();

    if(config.name){
      setTimeout(() => {
        alert("🎂 Joyeux anniversaire " + config.name + " 🎂");
      }, 500);
    }
  }
}