document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  
  document.body.appendChild(canvas);

  function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  }

  resizeCanvas();

  const snowflakes = [];
  const numFlakes = 40;

  for (let i = 0; i < numFlakes; i++) {
      snowflakes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * -1,
          radius: Math.random() * 2 + 1,
          speed: Math.random() * 0.5 + 0.2,
          drift: Math.random() * 1 - 0.5
      });
  }

  function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < numFlakes; i++) {
          const flake = snowflakes[i];
          flake.y += flake.speed;
          flake.x += flake.drift;

          if (flake.y > canvas.height) {
              flake.y = 0;
              flake.x = Math.random() * canvas.width;
          }

          if (flake.x > canvas.width) {
              flake.x = 0;
          } else if (flake.x < 0) {
              flake.x = canvas.width;
          }

          ctx.beginPath();
          ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
          ctx.fillStyle = "white";
          ctx.fill();
      }

      requestAnimationFrame(update);
  }

  update();

  window.addEventListener('resize', resizeCanvas);
});