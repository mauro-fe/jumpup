// Começo funcão para validar os input

// Funcão para mostrar pro se o input foi enviado ou não
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
