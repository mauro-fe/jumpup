// Inicio botão de scroll da página para o topo
const scrollTop = document.querySelector(".scrollTop");
const btnScrollTop = document.querySelector(".btnScrollTop");

// Verifica aonde está o scroll ao rolar a página
function verificarScroll() {
    // Se tiver maior que 100 o botão aparece caso contrário some
    if (window.scrollY > 100) {
        btnScrollTop.style.display = "block";
    } else {
        btnScrollTop.style.display = "none";
    }
}

// Verifica ao rolar o scroll
window.addEventListener("scroll", verificarScroll);

// Verifica ao carregar a página
window.addEventListener("load", verificarScroll);

// Botã
btnScrollTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// Fim botão de scroll da página para o topo

// COMEÇO HEADER
// Fazer header fixo suave
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
// FIM HEADER

// INICIO NAVBAR
const navbarIcon = document.getElementById("navbar-icon");
const navbarMobile = document.querySelector(".navbar-mobile");

navbarIcon.addEventListener("click", function () {
    navbarMobile.classList.toggle("active");
})

window.addEventListener("resize", function () {
    if (window.innerWidth >= 870) {
        navbarMobile.classList.remove("active");
    }
});
// FIM NAVBAR