const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
function addShift(object, newKey, newValue) {
  object[newKey] = newValue;
}

addShift(lesson2, 'turno', 'noite');

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
function listKeys(object) {
  console.log(Object.keys(object));
}

listKeys(lesson1);

// Crie uma função para mostrar o tamanho de um objeto.

function objectSize(object) {
  const objectToAnalyze = Object.keys(object);
  console.log(objectToAnalyze.length);
}

objectSize(lesson1);

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
function listValues(object) {
  console.log(Object.values(object));
}

listValues(lesson1);

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
function totalStudents(object) {
  let value = 0;
  const lessonsArray = Object.keys(object);
  for (let index = 0; index < lessonsArray.length; index += 1) {
    value += object[lessonsArray[index]].numeroEstudantes;
  }

  return value;
}

console.log(totalStudents(allLessons));

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
function getPositionValue(obj, number) {
  return Object.values(obj)[number];
}

console.log(getPositionValue(lesson1, 0));

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
function pairExists(object, key, value) {
  const entriesArray = Object.entries(object);
  let isEqual = false;
  for (let index in entriesArray) {
    if (entriesArray[index][0] === key && entriesArray[index][1] === value){
      isEqual = true;
    }
  }
  return isEqual;
}

console.log(pairExists(lesson3, 'turno', 'noite'));
console.log(pairExists(lesson3, 'materia', 'Maria Clara'));