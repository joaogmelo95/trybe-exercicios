// Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

const user = {
  name: 'João',
  age: 25
};

function newObjectKey (object, newKey, keyValue) {
  let newKeyName = newKey;
  object[newKeyName] = keyValue;
  console.log(object);
}

newObjectKey(user, 'lastName', 'Melo');