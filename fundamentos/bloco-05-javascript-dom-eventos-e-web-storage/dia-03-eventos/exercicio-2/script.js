function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();


//   Exercício 1:

// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const daysUl = document.querySelector('#days');

function createDezDays() {
    for (let index = 0; index < dezDaysList.length; index += 1) {
        const currentDay = dezDaysList[index];
        const newDay = document.createElement('li');
        newDay.innerHTML = currentDay;
        newDay.classList.add('day');

        if (currentDay === 24 || currentDay === 25 || currentDay === 31) {
            newDay.classList.add('holiday');
        }

        if (currentDay === 4 || currentDay === 11 || currentDay === 18 || currentDay === 25) {
            newDay.classList.add('friday');
        }

        daysUl.appendChild(newDay);
    }
}

createDezDays();

//   Exercício 2:

//   Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
//   Adicione a este botão a ID "btn-holiday" .
//   Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
const buttonsContainer = document.querySelector(".buttons-container");

function createHolidayBtn(string) {
    const holidayBtn = document.createElement("button");
    holidayBtn.id = "btn-holiday";
    holidayBtn.innerHTML = string;
    buttonsContainer.appendChild(holidayBtn);
}

createHolidayBtn("Feriados");

//   Exercício 3:

// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
let activateHolidayBtn = false;

function holydayBtnClick() {
    if (activateHolidayBtn === false) {
        for (let day of daysUl.children) {
            for (let classes of day.classList) {
                if (classes === 'holiday') {
                    day.style.backgroundColor = 'red';
                }
            }
        }
        activateHolidayBtn = true;
    } else {
        for (let day of daysUl.children) {
            day.style.backgroundColor = 'rgb(238,238,238)';
        }
        activateHolidayBtn = false;
    }
}

const holidayBtn = document.querySelector('#btn-holiday');
holidayBtn.addEventListener('click', holydayBtnClick);

//   Exercício 4:

// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
function createFridayBtn(string) {
    const fridayBtn = document.createElement('button');
    fridayBtn.id = 'btn-friday';
    fridayBtn.innerHTML = string;
    buttonsContainer.appendChild(fridayBtn);
}

createFridayBtn('Sexta-feira');

//   Exercício 5:

// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
let activateFridayBtn = false;

function fridayBtnClick() {
    if (activateFridayBtn === false) {
        for (let day of daysUl.children) {
            for (let classes of day.classList) {
                if (classes === 'friday') {
                    day.id = day.innerHTML;
                    day.innerHTML = 'SEXTOU!';
                }
            }
        }
        activateFridayBtn = true;
    } else {
        for (let day of daysUl.children) {
            if (day.id !== '') {
                day.innerHTML = day.id;
                day.removeAttribute('id');
            }
        }
        activateFridayBtn = false;
    }
}

const fridayBtn = document.querySelector('#btn-friday');
fridayBtn.addEventListener('click', fridayBtnClick);

//   Exercício 6:

// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
function zoomInDays(event) {
    event.target.style.fontSize = '40px';
}

function zoomOffDays(event) {
    event.target.style.fontSize = '20px';
}

for (let kid of daysUl.children) {
    kid.addEventListener('mouseover', zoomInDays);
    kid.addEventListener('mouseout', zoomOffDays);
}

//   Exercício 7:

// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
const myTasks = document.querySelector('.my-tasks');
function addTask(string) {
    const newTask = document.createElement('span');
    newTask.innerHTML = string;
    myTasks.appendChild(newTask);
}

addTask('Tarefa personalizada');

//   Exercício 8:

// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
function addTaskSubtitle(cor) {
    let newSubtitle = document.createElement('div');
    newSubtitle.classList.add('task');
    newSubtitle.style.backgroundColor = cor;
    myTasks.appendChild(newSubtitle);
}

addTaskSubtitle('green');

//   Exercício 9:

// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
let activeSubtitleClick = false;

function subtitleClick(event) {
    if (activeSubtitleClick === false) {
        event.target.classList.add('selected');
        activeSubtitleClick = true;
    } else {
        event.target.classList.remove('selected');
        activeSubtitleClick = false;
    }
}

for (let element of myTasks.children) {
    for (let classes of element.classList) {
        if (classes === 'task') {
            element.addEventListener('click', subtitleClick);
        }
    }
}

//   Exercício 10:

// Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .
function addColorToDay(event) {
    let selectedColor = '';
    for (let element of myTasks.children) {
        for (let classes of element.classList) {
            if (classes === 'selected') {
                selectedColor = element.style.backgroundColor;
            }
        }
    }

    if (event.target.style.color !== selectedColor) {
        event.target.style.color = selectedColor;
    } else {
        event.target.style.color = 'rgb(119,119,119)';
    }
}

for (let kid of daysUl.children) {
    kid.addEventListener('click', addColorToDay);
}

// Bônus:

// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
// Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
// Ao pressionar a tecla "enter" o evento também deverá ser disparado.
const textInput = document.querySelector('#task-input');
const addEventBtn = document.querySelector('#btn-add');
const taskList = document.querySelector('.task-list')

function addNewEvent() {
    if (textInput.value !== '') {
        let newEvent = document.createElement('li');
        newEvent.innerHTML = textInput.value;
        taskList.appendChild(newEvent);
        textInput.value = '';
    } else {
        alert('Input vazio');
    }
}

function addKeyCode(event) {
    if (event.keyCode === 13) {
        addNewEvent();
    }
}

addEventBtn.addEventListener('click', addNewEvent);
textInput.addEventListener('keydown', addKeyCode);