let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")

/* ex: quero mudar o
tamanho do espaço "nome" do meu formulario, que tem como "id": nome:
nome.style.width = "100%"*/

/*para validar:*/
let nomeOk = false
let emailOk = false
let assuntoOk = false

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome Inválido!"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "Email Inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "Nome Válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")
    if (mensagem.value.length >= 100) {
        txtAssunto.innerHTML = "Texto é muito grande! Digite no máximo 100 caracteres."
        txtAssunto.style.color = "red"
    } else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar() {
if(nomeOk == true && emailOk == true && assuntoOk == true){
    alert("Formulário enviado com sucesso!")
}else{
    alert("Preencha o formulário corretamente antes de enviar...")
}
}
