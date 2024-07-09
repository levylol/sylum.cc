(function() {
  const snowflakesCount = 15;
  const snowflakes = ["†"];
  
  const createSnowflakeStyle = () => {
      const style = document.createElement('style');
      style.textContent = `
          @keyframes snowflakes-fall {
              0% { top: -10%; }
              100% { top: 100%; }
          }
          @keyframes snowflakes-shake {
              0%, 100% { transform: translateX(0); }
              50% { transform: translateX(80px); }
          }
          .snowflake {
              color: rgb(255, 255, 255);
              font-family: Arial, sans-serif;
              text-shadow: 0 0 10px #000;
              font-size: 1em;
              position: fixed;
              top: -10%;
              z-index: 9999;
              user-select: none;
              cursor: default;
              animation-name: snowflakes-fall, snowflakes-shake;
              animation-duration: 10s, 3s;
              animation-timing-function: linear, ease-in-out;
              animation-iteration-count: infinite, infinite;
              animation-play-state: running, running;
          }
      `;
      document.head.appendChild(style);
  };

  const createSnowflake = (index) => {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.textContent = snowflakes[index % snowflakes.length];
      snowflake.style.left = `${(index * 10) + 1}%`;
      snowflake.style.animationDelay = `${(index % 2 === 0 ? index : Math.random() * 10)}s, ${Math.random() * 3}s`;
      document.body.appendChild(snowflake);
  };

  const initSnowflakes = () => {
      createSnowflakeStyle();
      for (let i = 0; i < snowflakesCount; i++) {
          createSnowflake(i);
      }
  };

  document.addEventListener('DOMContentLoaded', initSnowflakes);
})();

// Number of snowflakes
const numFlakes = 50;

// Function to create a snowflake
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000); // Remove snowflake after 5 seconds
}

// Function to start snowfall
function startSnowfall() {
    for (let i = 0; i < numFlakes; i++) {
        createSnowflake();
    }
    setInterval(createSnowflake, 500); // Create new snowflake every 0.5 seconds
}

// Start snowfall when the window loads
window.onload = startSnowfall;
