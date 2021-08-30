//7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function verificaFimPalavra(word, ending) {
    word = word.split('');
    ending = ending.split('');
    let isEnding = true;

    for (let index = 0; index < ending.length; index += 1) {
      if (word[word.length - ending.length + index] != ending[index]) {
        isEnding = false;
      }
    }
    return isEnding;
  }
  
  console.log(verificaFimPalavra('trybe', 'be'));