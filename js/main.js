(function () {
  const body = document.body;
  const burger = document.getElementById("burgerBtn");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("navOverlay");
  const closeBtn = document.getElementById("sidebarClose");
  const navLinks = document.querySelectorAll(".sidebar-nav .nav-link[href^='#']");

  const MQ_DESKTOP = window.matchMedia("(min-width: 1025px)");

  function isDesktop() {
    return MQ_DESKTOP.matches;
  }

  function openMobileNav() {
    body.classList.add("nav-open");
    if (burger) burger.setAttribute("aria-expanded", "true");
    if (overlay) overlay.hidden = false;
  }

  function closeMobileNav() {
    body.classList.remove("nav-open");
    if (burger) burger.setAttribute("aria-expanded", "false");
    if (overlay) overlay.hidden = true;
  }

  function toggleSidebar() {
    if (isDesktop()) {
      // PC : rétracter / déployer le menu latéral
      body.classList.toggle("sidebar-collapsed");
      try {
        localStorage.setItem(
          "rgpd-sidebar-collapsed",
          body.classList.contains("sidebar-collapsed") ? "1" : "0"
        );
      } catch (e) {}
    } else {
      // Mobile / tablette : ouvrir / fermer le panneau
      if (body.classList.contains("nav-open")) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    }
  }

  // Restaurer l'état collapsed sur desktop
  try {
    if (isDesktop() && localStorage.getItem("rgpd-sidebar-collapsed") === "1") {
      body.classList.add("sidebar-collapsed");
    }
  } catch (e) {}

  if (burger) {
    burger.addEventListener("click", toggleSidebar);
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", closeMobileNav);
  }
  if (overlay) {
    overlay.addEventListener("click", closeMobileNav);
  }

  // Fermer le menu mobile au clic sur un lien
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (!isDesktop()) {
        closeMobileNav();
      }
    });
  });

  // Échap pour fermer
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && body.classList.contains("nav-open")) {
      closeMobileNav();
    }
  });

  // Si on passe en desktop, fermer le panneau mobile
  MQ_DESKTOP.addEventListener("change", function (e) {
    if (e.matches) {
      closeMobileNav();
    }
  });

  // Highlight section active au scroll
  const sections = document.querySelectorAll("section[id], article[id]");
  function highlightNav() {
    const y = window.scrollY + 120;
    let current = "";
    sections.forEach(function (sec) {
      const top = sec.offsetTop;
      const h = sec.offsetHeight;
      if (y >= top && y < top + h) {
        current = sec.getAttribute("id");
      }
    });
    navLinks.forEach(function (link) {
      link.classList.remove("active");
      const href = link.getAttribute("href");
      if (href === "#" + current) {
        link.classList.add("active");
      }
    });
  }
  window.addEventListener("scroll", highlightNav, { passive: true });
  window.addEventListener("load", highlightNav);
})();
