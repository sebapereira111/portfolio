// Variables

const menuIcon = document.querySelector(".menu-icono");
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

// Menu que se esconde con el botoncito arriba a la derecha

function openMenu() {
    document.body.classList.toggle("show-scroll");
    menu.classList.toggle("show-menu");
    menuIcon.classList.toggle("show-menu-icono", false);
}

function closeMenu() {
    document.body.classList.toggle("show-scroll", false);
    menu.classList.toggle("show-menu", false);
    menuIcon.classList.toggle("show-menu-icono", true);
}

menuIcon.addEventListener("click", openMenu);
menu.addEventListener("click", closeMenu);

const showMenuIcon = new IntersectionObserver(
    (entries) => {
        if (entries[0].isIntersecting) {
            menuIcon.classList.toggle("show-menu-icono", false);
        } else {
            menuIcon.classList.toggle("show-menu-icono", true);
        }
    },
    { threshold: 0.3 }
);

showMenuIcon.observe(nav);

//titulos de las secciones

const contenido = document.querySelectorAll(".contenido");
const contenidoTitulo = document.querySelectorAll(".contenido-titulo");

const observerContenido = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.querySelector("h2").classList.toggle("show-titulo", true);
        } else {
            entry.target.querySelector("h2").classList.toggle("show-titulo", false);
        }
    }
  }, { rootMargin: "-49% 0 -49% 0" }
);

for (j = 0 ; j < contenido.length ; j++) {
    observerContenido.observe(contenido[j]);
}