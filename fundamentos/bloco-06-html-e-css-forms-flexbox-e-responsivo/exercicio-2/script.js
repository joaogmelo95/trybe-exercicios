// Localiza select
const estados = document.querySelector('#estados');

// Localiza campo de data
const startDate = document.querySelector('#start-date');

// Localiza botão
const submitBtn = document.querySelector('#submit');

const listaEstados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

function listOfStates() {
    for (let index = 0; index < listaEstados.length; index += 1) {
        const newState = document.createElement('option');
        newState.innerHTML = listaEstados[index];
        estados.appendChild(newState);
    }
}

listOfStates();

function checkDate(value) {
    const regex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
    let isDate = regex.test(value);
    if (isDate === false) {
        alert('Data inválida');
    }
}

function clickBtn(event) {
    event.preventDefault();
    checkDate(startDate.value);
}

submitBtn.addEventListener('click', clickBtn);