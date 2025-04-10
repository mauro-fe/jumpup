// COMEÇO HEADER
// Fazer scroll suave
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
// FIM HEADER

// COMEÇO GALERIA
// Função para abrir a imagem da galeria
function openImage(src) {
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('overlayImg').src = src;
}
// Função para fechar a imagem da galeria
function closeImage() {
    document.getElementById('overlay').style.display = 'none';
}
// FIM GALERIA


//NAV BAR

const navbarIcon = document.getElementById("navbar-icon");
const navbarDesktop = document.querySelector(".navbar-mobile");

navbarIcon.addEventListener("click", function () {
    if (navbarDesktop.style.display === "block") {
        navbarDesktop.style.display = "none"; // Esconde a navbar
    } else {
        navbarDesktop.style.display = "block"; // Mostra a navbar
    }

})
