// Variáveis da aplicação
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const randomNumber = Math.ceil(Math.random() * 10)
let xAttempts = 1

// Eventos
// Função que atua sempre que o evento de click é verdadeiro
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

// funções callback
function handleTryClick(event){
    event.preventDefault();  // não faça o padrão do evento de um botão. O padrão seria enviar, eu não quero que ele envie

    const inputNumber = document.querySelector("#inputNumber");

    if (Number(inputNumber.value) == randomNumber) {
        toggleScreen();

        document
        .querySelector(".screen2 h2")
        .innerText = `acertou em ${xAttempts} tentativas`
    }
    inputNumber.value = ""
    xAttempts ++
}

function handleResetClick() {
    toggleScreen();
    xAttempts = 1
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}


