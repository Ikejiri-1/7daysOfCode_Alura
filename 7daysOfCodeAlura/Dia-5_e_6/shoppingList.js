function shoppingListArray() {
    let addMore = addNewItem()
    let shoppingList = {
        frutas: [],
        laticínios: [],
        congelados: [],
        doces: [],
        outros: []

    }
    while (addMore.toLowerCase() === 'sim') {
        const food = prompt("Qual comida você deseja adicionar?")
        const category = prompt("Em qual categoria essa comida se encaixa?(frutas, laticínios, congelados, doces ou outros)")
    
    if(shoppingList[category]){
        shoppingList[category].push(food)
    }else{
        alert("Categoria não reconhecida, o item será adicionado na lista 'outros'")
        shoppingList.outros.push(food)
    }
    addMore= addNewItem()
    while(addMore.toLowerCase() !== 'sim' && addMore.toLowerCase() !== 'não'){
        alert("Operação não reconhecida!")
        addMore = addNewItem()
        
    }
}
showUpShoppingList(shoppingList)
removeItem(shoppingList)

        

function addNewItem() {
    return prompt("Deseja adicionar algum item à sua lista de compras? (sim/não)").toLowerCase()
}

function showUpShoppingList(shoppingList) {
    let message = "lista de compras:\n"
    for(let category in shoppingList){
        let items = shoppingList[category]
        if(items.length>0){
            message += `${category[0].toUpperCase() + category.slice(1)}: ${items.join(", ")}\n `
        }
        else{
            message +=`${category[0].toUpperCase() + category.slice(1)}:\n`
        }
    }
    alert(message)
}
function removeItem(){
        let remove = prompt("Deseja remover algum item da lista? (sim/não)").toLowerCase();
    while (remove === "sim") {
        const itemToRemove = prompt("Qual item deseja remover?");
        let found = false;

        for (let category in shoppingList) {
            const index = shoppingList[category].indexOf(itemToRemove);
            if (index !== -1) {
                shoppingList[category].splice(index, 1);
                found = true;
                alert(`O item "${itemToRemove}" foi removido da categoria ${category}.`);
                break;
            }
        }

        if (!found) {
            alert(`O item "${itemToRemove}" não foi encontrado na lista.`);
        }
        showUpShoppingList(shoppingList);
        remove = prompt("Deseja remover outro item? (sim/não)").toLowerCase();
        if(remove ==="não"){
            alert("Boas compras!!")
        }
    }

    
}
}

const btnStart = document.getElementById('btnStart')
btnStart.addEventListener('click', shoppingListArray)