const form = document.querySelector("form")
const name = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const job = document.getElementById("job")
const message = document.getElementById("message")


form.addEventListener("submit", (event) => {
    event.preventDefault()

    if(name.value == "") {
        showModal("Por favor, digite seu nome")
        return
    }

    if(email.value == "" || !emailIsValid(email.value)) {
        showModal("Digite um email válido")
        return
    }

    if(password.value == "" || !validatePassword(password.value, 8)) {
        showModal("A senha deve ter no mínimo 8 caracteres")
        return
    }
    if(job.value == "") {
        showModal("Selecione a situação de trabalho")
        return
    }
    if(message.value == "") {
        showModal("A mensagem não pode estar em branco")
        return
    }

    form.submit()
})


function showModal(txt) {
    const background = document.querySelector(".dark-back")
    const close_modal = document.getElementById("close-modal")
    const text = document.getElementById("text")

    background.style.visibility = "visible"
    text.innerText = txt

    function closeModal() {
        background.style.visibility = "hidden"
    }
    close_modal.addEventListener("click", closeModal)
}

function emailIsValid(email) {
    const regEx = new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    if(regEx.test(email)) {
        return true
    }
    return false
}

function validatePassword(password, minDigit) {
    if(password.length < minDigit) {
        return false
    }
    return true
}
