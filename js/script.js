const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll(".nav-btn, .nav-icon");

navLinks.forEach(link => {

    const linkPage = link.getAttribute("href");

    if(linkPage === currentPage){
        link.classList.add("active");
    }

});

/* =========================================================
   CURSOR SPARKLE EFFECT
========================================================= */

const sparkleContainer = document.getElementById("sparkle-container");

let sparkleThrottle = false;

document.addEventListener("mousemove", (event) => {

  // PERFORMANCE THROTTLE
  if (sparkleThrottle) return;

  sparkleThrottle = true;

  requestAnimationFrame(() => {

    createSparkle(event.clientX, event.clientY);

    sparkleThrottle = false;

  });

});

/**
 * Create Sparkle Particle
 */

function createSparkle(x, y) {

  const sparkle = document.createElement("span");

  sparkle.classList.add("sparkle");

  // RANDOM SIZE
  const size = Math.random() * 6 + 4;

  sparkle.style.width = `${size}px`;
  sparkle.style.height = `${size}px`;

  // POSITION
  sparkle.style.left = `${x}px`;
  sparkle.style.top = `${y}px`;

  // RANDOMIZED OFFSET
  const randomX = (Math.random() - 0.5) * 20;
  const randomY = (Math.random() - 0.5) * 20;

  sparkle.style.transform = `
    translate(
      calc(-50% + ${randomX}px),
      calc(-50% + ${randomY}px)
    )
    scale(1)
  `;

  sparkleContainer.appendChild(sparkle);

  // FADE OUT
  requestAnimationFrame(() => {

    sparkle.classList.add("fade-out");

  });

  // REMOVE PARTICLE
  setTimeout(() => {

    sparkle.remove();

  }, 500);
}