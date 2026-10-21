/* Navigation mobile */
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });

  // Fermer le menu au clic sur un lien
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
    });
  });
}

/* Highlight current section in nav (optional enhancement) */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".main-nav a");

function highlightNav() {
  const scrollY = window.scrollY + 100;
  let current = "";

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    if (scrollY >= top && scrollY < top + height) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.style.background = "";
    link.style.color = "";
    if (link.getAttribute("href") === `#${current}`) {
      link.style.background = "var(--bleu-clair)";
      link.style.color = "var(--bleu-fonce)";
    }
  });
}

window.addEventListener("scroll", highlightNav);
window.addEventListener("load", highlightNav);
