// Javascript is separated in 4 sections to be more organized

/* The menu is hidden and can only be shown with the press of the menu button (menu-icono) */
/* Menu button is hidden on landing page and it appears when nav is scrolled out off screen (70% of it) */

// Variables
// The menu button
const menuIcon = document.querySelector(".menu-icono");
// The menu itself
const menu = document.querySelector(".menu");
// The nav from the top of the page
const nav = document.querySelector("nav");

// The function shows the menu and hides menu icon (receives a paramater true/false)
function mostrarMenu(activar) {
    // Disables/enables scroll on body
    document.body.classList.toggle("show-scroll", activar);
    // Show/hides menu
    menu.classList.toggle("show-menu", activar);
    // Hides/show menu-icon
    menuIcon.classList.toggle("show-menu-icono", !activar);
}

// When menu icon is clicked the menu is opened and menu icon hidden
menuIcon.addEventListener("click", () => {mostrarMenu(true);});
// When the menu is clicked the menu is closed and menu icon shown
menu.addEventListener("click", () => {mostrarMenu(false);});

// The menu icon is shown when 70% of nav is outside the screen
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

/* Content and title animation */

// The content section, an array
const contenido = document.querySelectorAll(".contenido");

// When the content is on the 2% central part of the viewport its title is shown and content fade in
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

/* Theme (dark/light) changing */

// Variables for the button (word) to change (toggle) it
const dark = document.querySelector("#dark");
const light = document.querySelector("#light");

// When thene is changed, color variables are reasigned and the button swapped
const toDark = function() {
    dark.classList.toggle("show-contraste", false);
    light.classList.toggle("show-contraste", true);
    document.documentElement.style.setProperty('--background', '#17202A');
    document.documentElement.style.setProperty('--background-dark', '#0c1218');
    document.documentElement.style.setProperty('--forecolor', '#D1F2EB');
    document.documentElement.style.setProperty('--menu-color', 'rgba(23, 32, 42, 0.8)');
}

const toLight = function() {
    light.classList.toggle("show-contraste", false);
    dark.classList.toggle("show-contraste", true);
    document.documentElement.style.setProperty('--background', '#D1F2EB');
    document.documentElement.style.setProperty('--background-dark', '#9fdccf');
    document.documentElement.style.setProperty('--forecolor', '#17202A');
    document.documentElement.style.setProperty('--menu-color', 'rgba(101, 112, 125, 0.9)');
}

dark.addEventListener("click", toDark);
light.addEventListener("click", toLight);

/* To detect the system theme */

const changeTheme = function() {
    // color scheme preference is checked and page theme adjusted accordingly
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        toDark();
    } else {
        toLight();
    }
}

// A listener is added for when the color scheme changes
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", changeTheme);

// Default theme is dark so when loading page prefered color scheme is checked, if it is light theme is changed
if (window.matchMedia("(prefers-color-scheme: light)").matches) toLight();