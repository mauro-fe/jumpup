// COMEÇO HEADER
// Fazer scroll suave do header
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
    setTimeout(function () {
        navbarMobile.classList.toggle("active");
    }, 500)
})

window.addEventListener("resize", function () {
    if (window.innerWidth >= 870) {
        navbarMobile.classList.remove("active");
    }
});

// FIM NAVBAR

// COMEÇO CONTATO

let inputName = document.querySelector("#nome");
let inputEmail = document.querySelector("#email");
let inputTel = document.querySelector("#tel");
let inputText = document.querySelector("#msg");
let btnEnviar = document.querySelector(".btnEnviar");
let btnLimpar = document.querySelector(".btnLimpar")
let dadosEnviados = document.querySelector(".dadosEnviados");
let preenchaCampos = document.querySelector(".preenchaCampos");
let emailInvalido = document.querySelector(".emailInvalido");



const scrollTop = document.querySelector(".scrollTop");

const btnScrollTop = document.querySelector(".btnScrollTop");

function verificarScroll() {
    if (window.scrollY > 100) {
        btnScrollTop.style.display = "block";
    } else {
        btnScrollTop.style.display = "none";
    }
}

// Verifica ao rolar
window.addEventListener("scroll", verificarScroll);

// Verifica ao carregar a página
window.addEventListener("load", verificarScroll);

// Opcional: se você estiver usando SPA ou frameworks (tipo AJAX, Vue, etc.)
// pode usar também:
document.addEventListener("DOMContentLoaded", verificarScroll);


btnScrollTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
window.addEventListener("load", verificarScroll);