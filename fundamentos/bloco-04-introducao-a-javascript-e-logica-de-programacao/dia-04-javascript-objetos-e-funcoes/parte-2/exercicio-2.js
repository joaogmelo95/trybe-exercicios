function checkPalindrome(trecho){
    for(let index in trecho){
      if(trecho[index] != trecho[(trecho.length - 1) - index]){
        return false;
      }
    }
    return true;
};

console.log(checkPalindrome('anana'));

let maior = [2, 3, 6, 7, 10, 1];

function checkBiggest(array) {
    let checkValue = {
        index: 0,
        valor: array[0]
    };

    for (let key in array) {
        if (array[key] > checkValue.valor) {
            checkValue.index = key;
            checkValue.valor = array[key];
        }
    }

    return checkValue.index;
};

console.log(checkBiggest(maior));

let menor = [2, 4, 6, 7, 10, 0, -3];

function checkSmallest(array) {
    let checkValue = {
        index: 0,
        valor: array[0]
    };

    for (let key in array) {
        if (array[key] < checkValue.valor) {
            checkValue.index = key;
            checkValue.valor = array[key];
        }
    }

    return checkValue.index;
};

console.log(checkSmallest(menor));

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function checkBiggestName(array) {
    let checkName = array[0];

    for (let key in array) {
        if (array[key].length > checkName.length) {
            checkName = array[key];
        }
    }

    return checkName;
};

console.log(checkBiggestName(nomes));

