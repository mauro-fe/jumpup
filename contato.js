// COMEÇO CONTATO

let inputName = document.querySelector("#nome");
let inputEmail = document.querySelector("#email");
let inputTel = document.querySelector("#tel");
let inputText = document.querySelector("#msg");
let btnEnviar = document.querySelector(".btnEnviar");
let btnLimpar = document.querySelector(".btnLimpar")
let validacao = document.querySelector(".validacao");


// Começo funcão para validar os input

// Funcão para mostrar pro se o input foi enviado ou não
btnEnviar.addEventListener("click", function (e) {
    e.preventDefault();

    // Expressão regular para validar e-mail
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (inputName.value === "" || inputEmail.value === "" || inputTel.value === "") {
        validacao.classList.add("invalido")
        validacao.innerHTML = "Preencha todos os campos!"
        setTimeout(function () {
            validacao.classList.remove("invalido")
        }, 2000)
    } else if (!regex.test(inputEmail.value)) {
        validacao.classList.add("invalido")
        validacao.innerHTML = "Email invalido!"
        setTimeout(function () {
            validacao.classList.remove("invalido")
        }, 2000)
    } else {
        validacao.classList.add("valido")
        validacao.innerHTML = "Dados enviados com sucesso!"
        setTimeout(function () {
            validacao.classList.remove("valido")
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