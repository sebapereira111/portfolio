// Variables

const menuIcon = document.querySelector(".menu-icono");
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
const contenido = document.querySelectorAll(".contenido");
const contenidoTitulo = document.querySelectorAll(".contenido-titulo");

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

// Animacion de titulos de las secciones y de los contenidos

const observerContenido = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.querySelector("h2").classList.toggle("show-titulo", true);
            entry.target.classList.toggle("show-contenido", true);
        } else {
            entry.target.querySelector("h2").classList.toggle("show-titulo", false);
            entry.target.classList.toggle("show-contenido", false);
        }
    }
  }, { rootMargin: "-49% 0% -49% 0%" }
);

for (j = 0 ; j < contenido.length ; j++) {
    observerContenido.observe(contenido[j]);
}

// Animaacion del cambio de tamaño del viewport

const resizeElements = function() {
    let newHeight = window.innerHeight;
    console.log(newHeight);
    document.querySelector("header").style.height = newHeight/2 + "px";
    document.querySelector("nav").style.height = newHeight/2 + "px";
}

window.addEventListener('resize', resizeElements);