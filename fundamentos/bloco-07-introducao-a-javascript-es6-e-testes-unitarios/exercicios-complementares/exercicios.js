// Desafio 1 - Dada uma array, retornar uma nova array somente com números pares

// Ex:
const arr = [1,2,3,4,5];

function getEvenNumbers(array) {
  const newArray =[];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 2 === 0) {
      newArray.push(array[index]);
    }
  }

  return newArray;
}

console.log(getEvenNumbers(arr));


// Desafio 2 - Desenvolva uma função que receba um array de objetos com cidades e estados e retorne um array contendo o nome da cidade e do estado concatenados.

// Ex:
const citiesAndStates1 = [
  {
    city: 'Belo Horizonte',
    state: 'Minas Gerais'
  },
  {
    city: 'Salvador',
    state: 'Bahia'
  },
  {
    city: 'Porto Alegre',
    state: 'Rio Grande do Sul'
  },
  {
    city: 'Manaus',
    state: 'Amazonas'
  }
];


function buildCitiesArray(array) {
  const newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    const concatenatedString = `${array[index].city} - ${array[index].state}`;
    newArray.push(concatenatedString);
  }

  return newArray;
}

console.log(buildCitiesArray(citiesAndStates));


// Desafio 3 - Desenvolva uma função que receba um array de números e retorne verdadeiro se todos os valores forem maior que 18, falso caso contrário
const array1 = [20, 30, 19, 1, 50];
const array2 = [20, 30, 19, 19];

function allGreaterThanEighteen(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 18) {
      return false;
    }
  }

  return true;
}

console.log(allGreaterThanEighteen(array1));
console.log(allGreaterThanEighteen(array2));


// Desafio 3 - bônus - Desenvolva uma função que receba um array de números e retorne verdadeiro se TODOS os valores forem maior que o número recebido por parâmetro, falso caso contrário

// Ex: 
const array3 = [20, 30, 19, 1, 50];
const number1 = 20;

// Ex: 
const array4 = [20, 30, 19, 21];
const number2 = 18;

function allGreaterThan(number, array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < number) {
      return false;
    }
  }

  return true;
}

console.log(allGreaterThan(number1, array3));
console.log(allGreaterThan(number2, array4));


// Desafio 4 - Desenvolva uma função que recebe como primeiro parâmetro um array contendo objetos com cidades e estados. 
// Como segundo parâmetro ela recebe o nome de um estado.
// A função deverá retornar o primeiro objeto que contenha a propriedade state igual ao nome do estado recebido por parâmetro 

// Exemplo do array
const citiesAndStates2 = [
  {
    city: 'Belo Horizonte',
    state: 'Minas Gerais',
  },
  {
    city: 'Salvador',
    state: 'Bahia',
  },
  {
    city: 'Porto Alegre',
    state: 'Rio Grande do Sul',
  },
  {
    city: 'Ponta Grossa',
    state: 'Paraná',
  },
  {
    city: 'Manaus',
    state: 'Amazonas',
  },
  {
    city: 'Vitória da Conquista',
    state: 'Bahia',
  },
  {
    city: 'Curitiba',
    state: 'Paraná',
  },
]

// Caso a função receba o array acima como primeiro parâmetro e a string 'Paraná' no parâmetro state, o resultado esperado é o objeto:
// { city: 'Ponta Grossa', state: 'Paraná' }

// Caso a função receba o array acima como primeiro parâmetro e a string 'Bahia' no parâmetro state, o resultado esperado é o objeto:
// { city: 'Salvador', state: 'Bahia' }

function getCityByState(array, state) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].state === state) {
      return array[index];
    }
  }
}

console.log(getCityByState(citiesAndStates2, 'Paraná'));
console.log(getCityByState(citiesAndStates2, 'Bahia'));


// Desafio 5 - Desenvolva uma função que recebe um array e retorna a soma de todos os números desse array
// Ex:
const arraySum1 = [2, 3, 4, 6, 8, 12, 24];
// resultado esperado: 59

function sumAllNumbers(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index += 1) {
    sum += array[index];
  }

  return sum;
}

console.log(sumAllNumbers(arraySum));


// Desafio 5 - bonus - Faça uma nova função que some somente os números ímpares!
// Ex:
const arraySum2 = [2, 3, 4, 5, 6, 8, 12, 24, 15];
// resultado esperado: 23

function sumAllOdds(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 2 === 1) {
      sum += array[index];
    }
  }

  return sum;
}

console.log(sumAllOdds(arraySum2));
