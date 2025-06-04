const btnStart = document.getElementById('btnStart')

function guessTheNumber() {
    let secretNumber = 7
    let tentativa = 3
    for (let i = 1; i <= tentativa; i++) {
        let tryToGuess = Number(prompt(`Tentativa ${i}: Adivinhe o número de 1 a 10`))

        while (tryToGuess < 1 || tryToGuess > 10 || isNaN(tryToGuess)) {
            tryToGuess = Number(prompt("Por favor digite um número válido entre 1 e 10"))
        }
        if (tryToGuess === secretNumber) {
            alert("Parabéns, você acertou o número")
            break
        }
        else if (i < tentativa)
            alert("Você errou. Tente novamente")
        else {
            alert(`Você perdeu, o número secreto era ${secretNumber}`)
        }
    }
}

btnStart.addEventListener('click', guessTheNumber)


function guessTheRandomNumber() {
    let randomSecretNumber = Math.floor(Math.random() * 11 )
    const tentativas = 3
    let hint = ''

    for (let t = 1; t <= tentativas; t++) {

        let guess = Number(prompt(`Tentativa ${t}: Adivinhe o número de 1 a 10`))

        while (guess < 1 || guess > 10 || isNaN(guess)) {
            guess = Number(prompt("Por favor, digite um número válido entre 1 e 10."));
        }


        if (guess === randomSecretNumber) {
            alert("parabéns, você acertou o número secreto aleatório")
            break;
        }
        if (t === 1) {
            hint = guess < randomSecretNumber ? "maior" : "menor"
            alert(`Dica: O número secreto é ${hint} que ${guess} `)
        }
        else if (t === 2) {
            let evenOrOdd = randomSecretNumber % 2 === 0 ? "par" : "ímpar"
            alert(`Dica bônus!: O número secreto é ${evenOrOdd} e ${hint} que ${guess}`)
        }
        else {
            alert(`Você perdeu o jogo. O número secreto era ${randomSecretNumber}`)
        }
    }
}
const randomBtn = document.getElementById('randomBtn')
randomBtn.addEventListener('click', guessTheRandomNumber)