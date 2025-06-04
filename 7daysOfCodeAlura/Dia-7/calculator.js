const btnStart = document.getElementById('button')

function calculator() {
    let message = mainMessage()
    while (message !== 'sair') {
        if (['+', '-', '*', '%'].includes(message)) {
            let num1 = parseFloat(prompt("Digite o primeiro número"))
            let num2 = parseFloat(prompt("Digite o segundo número"))
            let result

            if (isNaN(num1) || isNaN(num2)) {
                alert("Digite um número válido")
            }
            else {
                switch (message) {
                    case '+':
                        result = sum(num1, num2)
                        break
                    case '-':
                        result = subtract(num1, num2)
                        break
                    case '*':
                        result = multiplication(num1, num2)
                        break
                    case '%':
                        result = division(num1, num2).toFixed(2)
                    
                }
                alert(`O resultado é ${result}`)
            }
            
        }else{
            alert("Operação inválida")
        }
         message = mainMessage()
    }
    alert("Até a próxima")
}
btnStart.addEventListener('click', calculator)

function mainMessage() {
    return prompt("Qual cálculo deseja fazer? Escreva (+) para adição, (-) para subtração, (*) para multiplicação e (%) para divisão ou 'sair' para encerrar")
}

function sum(a,b){
    return a + b
}
function subtract(a,b){
    return a - b
}
function multiplication(a,b){
    return a * b
}
function division(a,b){
    if(b === 0){
        return "Erro: divisão por 0"
    }
        return a / b
    
}
