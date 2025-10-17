// ----------------- Homepage Animated Text -----------------
const text = document.querySelector(".animated-text text");
if (text) {
  const strokeDuration = 30; // seconds for stroke animation
  const fillDuration = 1;    // seconds for fill animation
  const length = 2200; // adjust based on text length

  text.style.strokeDasharray = length;
  text.style.strokeDashoffset = length;

  text.style.animation = `draw ${strokeDuration}s linear forwards, fillText ${fillDuration}s ease forwards ${strokeDuration}s`;

  const styleSheet = document.createElement("style");
  styleSheet.innerHTML = `
    @keyframes draw { to { stroke-dashoffset: 0; } }
    @keyframes fillText { to { fill: #00e0ff; stroke: none; } }
  `;
  document.head.appendChild(styleSheet);
}

// ----------------- Navbar Active Link -----------------
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

// ----------------- Always Dark Mode -----------------
const logoImg = document.getElementById("logo-img");
if (logoImg) {
  logoImg.src = "photos/LOGO7.png"; // always use dark-theme logo
}

// Remove theme toggle button if exists
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  themeToggle.remove();
}
