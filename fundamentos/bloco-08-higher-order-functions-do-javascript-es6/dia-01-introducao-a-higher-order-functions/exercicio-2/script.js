// Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

function returnObject(nomeCompleto) {
  const email = nomeCompleto.toLowerCase().split(' ').join('_');
  return { nomeCompleto, email: `${email}@trybe.com` };
}

function newEmployees(callback) {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  };

  return employees;
};

console.log(newEmployees(employeeGenerator));

// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").


function checkResult(userGuess, sortedNumber) {
  if (userGuess === sortedNumber) {
    return 'Parabéns você ganhou';
  }

  return `Tente novamente -> ${sortedNumber}`;
}


function sortResult(userGuess, func) {
  const sortedNumber = Math.floor(Math.random() * 6);
  const result = func(userGuess, sortedNumber);
  return result;
}

console.log(sortResult(5, checkResult));

// Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

function checkAnswers(correctAnswers, answersToBeChecked) {
  let score = 0;

  for (let index = 0; index < correctAnswers.length; index += 1) {
    if (correctAnswers[index] === answersToBeChecked[index]) {
      score += 1;
    } else if (correctAnswers[index] !== answersToBeChecked[index] && answersToBeChecked[index] !== 'N.A') {
      score -= 0.5;
    }
  }

  return score;
}

function testResult(correctAnswers, answersToBeChecked, checkAnswers) {
  const result = checkAnswers(correctAnswers, answersToBeChecked);
  return result;
}

console.log(testResult(rightAnswers, studentAnswers, checkAnswers));