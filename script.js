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

// ----------------- Theme Toggle (with Logo Switch) -----------------
const themeToggle = document.getElementById("theme-toggle");
const logoImg = document.getElementById("logo-img");
const body = document.body;

if (logoImg) {
  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    body.classList.add("light");
    logoImg.src = "photos/LOGO6.png"; // logo for light theme
    themeToggle.textContent = "🌞";
  } else {
    body.classList.remove("light"); // dark is default
    logoImg.src = "photos/LOGO7.png"; // logo for dark theme
    themeToggle.textContent = "🌙";
  }

  // Toggle theme on button click
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("light");

    if (body.classList.contains("light")) {
      logoImg.src = "photos/LOGO6.png";
      themeToggle.textContent = "🌞"; 
      localStorage.setItem("theme", "light");
    } else {
      logoImg.src = "photos/LOGO7.png";
      themeToggle.textContent = "🌙"; 
      localStorage.setItem("theme", "dark");
    }
  });
}
