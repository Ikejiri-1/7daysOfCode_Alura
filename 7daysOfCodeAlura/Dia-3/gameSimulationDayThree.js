function gameSimulation() {
    let area = prompt("Com qual área você se identifica mais ? Digite 'Front-end' ou 'Back-end'").toLowerCase()
    let tecnology =[]
    if (area == 'front-end') {
        tecnology = prompt("Vi que você escolheu Front-end, você quer aprender, React ou VUE?")
    }
    else if (area == 'back-end') {
        tecnology = prompt("Vi que você escolheu Back-end, você quer aprender C# ou Java?")
    }
    else{
        alert("Escolha inválida, reiniciar o jogo")
        return
    }

    let specialization = prompt(`Percebi que você escolheu ${area} e quer aprender ${tecnology}. Agora preciso saber, você quer se especializar na área? Responda com 'especializar'. Ou você quer se tornar um Dev fullstack? Responda com 'fullstack'`).toLowerCase()

    if (specialization === 'especializar') {
        alert(`Parabéns pela decisão, seguir por este caminho te tornará um expert em ${area}!`)
    }
    else if (specialization === 'fullstack') {
        alert("Ótima decisão, se tornar um Dev fullstack irá te preparar para diversos desafios!")
    }
    else{
        alert("Responda com 'especializar' ou 'fullstack'")
        return
    }
    

    let learnTechnology = []
    let continueLearning = "ok"

    while (continueLearning === "ok") {
        let newTechnology = prompt("Teria mais alguma tecnologia que você gostaria de aprender? Se sim, quais?")
        if (newTechnology) {
            learnTechnology.push(newTechnology)
        }
        continueLearning = prompt("Gostaria de aprender mais alguma tecnologia? Digite 'ok' para continuar, ou 'sair' para parar")
    }
    if (learnTechnology.length > 0){
        alert("Parabéns pelas suas escolhas e decisões ao decidir aprender: " +learnTechnology.join(", "))
    }
    else{
        alert("Percebi que não quer aprender mais nenhuma tecnologia, mas continue sempre explorando o mundo da programação!")
    
}
}

