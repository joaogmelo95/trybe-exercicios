const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
const container = document.querySelector('.container');

function techClass(event) {
  for (let child of container.children) {
    if (child.className === 'tech') {
      child.classList.remove('tech');
    }
  }

  event.target.classList.add('tech');
}

firstLi.addEventListener('click', techClass);
secondLi.addEventListener('click', techClass);
thirdLi.addEventListener('click', techClass);


// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
function changeTechText() {
  for (let child of container.children) {
    if (child.className === 'tech') {
      child.innerText = input.value;
    }
  }
}

input.addEventListener('keyup', changeTechText);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
function redirectToPortfolio() {
  window.location.replace('https://joaogmelo95.github.io/portfolio/');
}

myWebpage.addEventListener('dblclick', redirectToPortfolio);

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
function hoverSpotrybefy() {
  myWebpage.style.color = '#2fc18c';
}

function resetSpotrybefy() {
  myWebpage.style.color = 'white';
}

myWebpage.addEventListener('mouseover', hoverSpotrybefy);
myWebpage.addEventListener('mouseleave', resetSpotrybefy);


// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.