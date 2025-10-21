// ----------------- Homepage Animated Text -----------------
const animatedText = document.querySelector(".animated-text text");
if (animatedText) {
  const strokeDuration = 6; // reduced to make drawing faster
  const fillDuration = 1;  // faster fill
  const length = 2200;        // adjust based on text length

  animatedText.style.strokeDasharray = length;
  animatedText.style.strokeDashoffset = length;

  animatedText.style.animation = `draw ${strokeDuration}s linear forwards, fillText ${fillDuration}s ease forwards ${strokeDuration}s`;

  const styleSheet = document.createElement("style");
  styleSheet.innerHTML = `
    @keyframes draw { to { stroke-dashoffset: 0; } }
    @keyframes fillText { to { fill: #00e0ff; stroke: none; } }
  `;
  document.head.appendChild(styleSheet);
}

// ----------------- Navbar Active Link -----------------
document.querySelectorAll(".nav-links a").forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

// ----------------- Always Dark Mode -----------------
const logoImg = document.getElementById("logo-img");
if (logoImg) {
  logoImg.src = "photos/LOGO7.png"; // dark logo
}

// Remove theme toggle if exists
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) themeToggle.remove();
