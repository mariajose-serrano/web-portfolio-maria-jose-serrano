// ── Inicializar iconos Lucide ───────────────────────────────────
lucide.createIcons();

// ── Menú hamburguesa ────────────────────────────────────────────
const hamburger = document.querySelector(".hamburger");
const navMobile = document.querySelector(".nav-mobile");

function toggleMenu() {
  const isOpen = navMobile.classList.toggle("nav-open");
  hamburger.innerHTML = isOpen
    ? '<i data-lucide="x"></i>'
    : '<i data-lucide="menu"></i>';
  lucide.createIcons();
}

hamburger.addEventListener("click", toggleMenu);

// Cerrar menú al pulsar un enlace
navMobile.addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    navMobile.classList.remove("nav-open");
    hamburger.innerHTML = '<i data-lucide="menu"></i>';
    lucide.createIcons();
  }
});

// ── Cambio de idioma EN / ES ────────────────────────────────────
const langBtn = document.getElementById("langToggle");
let currentLang = "en";

langBtn.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "es" : "en";

  langBtn.textContent = currentLang === "en" ? "🌐 ES" : "🌐 EN";

  document.querySelectorAll("[data-en]").forEach((el) => {
    el.textContent = el.dataset[currentLang];
  });

  document.documentElement.lang = currentLang;
});
