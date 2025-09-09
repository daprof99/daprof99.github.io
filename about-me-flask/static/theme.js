const toggleBtn = document.getElementById("themeToggle");
const root = document.documentElement;
const navbar = document.querySelector(".navbar");

// Check system preference
if (window.matchMedia("(prefers-color-scheme: light)").matches) {
  root.setAttribute("data-theme", "light");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const newTheme = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", newTheme);
  toggleBtn.textContent = newTheme === "dark" ? "🌙" : "☀️";
});

// Shrink navbar on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
});
