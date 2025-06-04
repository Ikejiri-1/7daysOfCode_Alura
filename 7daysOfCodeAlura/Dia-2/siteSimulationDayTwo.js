function showMessage() {
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const languageInput = document.getElementById('language');
    const finalMessage = document.getElementById('final-message');

    const name = nameInput.value.trim();
    const age = ageInput.value.trim();
    const language = languageInput.value.trim();

    if (!name || !age || !language) {
        alert("Preencha todos os campos");
        return;
    }

    const message = `Olá ${name}, você tem ${age} anos e está estudando a linguagem de programação ${language}`;
    finalMessage.textContent = message;

    // Limpa os campos
    nameInput.value = "";
    ageInput.value = "";
    languageInput.value = "";

    // Cria a pergunta de follow-up
    createFollowUpQuestion(language);
}

function createFollowUpQuestion(language) {
    // Evita adicionar a mesma pergunta mais de uma vez
    if (document.getElementById('follow-up-label')) return;

    const label = document.createElement('label')
    label.textContent = `Você gosta de estudar ${language}? Se sim, responda com 1. Se não, responda com 2`
    label.id = 'follow-up-label'

    const input = document.createElement('input')
    input.type = 'number'
    input.id = 'follow-up-answer'
    input.min = '1'
    input.max = '2'
    input.placeholder = "1 ou 2"

    const btnAnswer = document.createElement('button')
    btnAnswer.textContent = 'Responder'
    btnAnswer.id = 'btn-answer'

    const feedback = document.createElement('p')
    feedback.id = 'feedback'
    
    btnAnswer.addEventListener('click', ()=>{
        const answer = input.value.trim();

        if (answer === '1'){
            feedback.textContent = "Muito bom! Continue aprendendo e praticando!!"
        }
        else if(answer ==='2'){
            feedback.textContent = "Que pena... Já tentou aprender alguma outra linguagem?"
        }
        else{
            feedback.textContent = "Responda apenas com 1(SIM) ou 2(Não), por favor"
        }
    })
    const finalMessage = document.getElementById('final-message')
    finalMessage.after(label)
    label.appendChild(document.createElement('br'))
    label.appendChild(input)
    label.appendChild(document.createElement('br'))
    label.appendChild(btnAnswer)
    label.appendChild(document.createElement('br'))
    label.appendChild(feedback)
}


const btnSend = document.getElementById('btn-send')
btnSend.addEventListener('click', showMessage)