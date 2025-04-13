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
    navbarMobile.classList.toggle("active");

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
let btnLimpar = document.querySelector("btnLimpar")
let dadosEnviados = document.querySelector(".dadosEnviados");
let preenchaCampos = document.querySelector(".preenchaCampos");
let emailInvalido = document.querySelector(".emailInvalido");

// Começo funcão para validar os input

// Funcão para mostrar pro usuário se o input foi enviado ou não
btnEnviar.addEventListener("click", function (e) {
    e.preventDefault();

    // Expressão regular para validar e-mail
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (inputName.value === "" || inputEmail.value === "" || inputTel.value === "") {
        preenchaCampos.classList.add("invalido")
        setTimeout(function () {
            preenchaCampos.classList.remove("invalido")
        }, 2000)
    } else if (!regex.test(inputEmail.value)) {
        emailInvalido.classList.add("invalido")
        setTimeout(function () {
            emailInvalido.classList.remove("invalido")
        }, 2000)
    } else {
        dadosEnviados.classList.add("valido")
        setTimeout(function () {
            dadosEnviados.classList.remove("valido")
            inputName.value = "";
            inputEmail.value = "";
            inputTel.value = "";
            inputText.value = "";
        }, 2000)
    }
})

// Limpar os inputs
btnLimpar.addEventListener("click", function (e) {
    e.preventDefault();
    inputName.value = "";
    inputEmail.value = "";
    inputTel.value = "";
    inputText.value = "";
})

// Máscara para editar telefone conforme o usuário digita
inputTel.addEventListener("input", function () {

    // Remove tudo que não é número
    let valor = inputTel.value.replace(/\D/g, '');

    // Limita a 11 dígitos
    if (valor.length > 11) valor = valor.slice(0, 11);

    if (valor.length <= 10) {
        valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else {
        valor = valor.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    }

    inputTel.value = valor;
});

// Fim funcão para validar os input