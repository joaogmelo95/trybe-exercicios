//1 - serão comparados valores para buscar o maior valor em um array. Tente criar essa função apenas com for e depois tente com reduce
const numbers1 = [50, 85, -30, 3, 15];

//Usando for
function biggestNumberFunc(array) {
  let biggestNumber = array[0];

  for (let index = 0; index < array.length; index += 1) {
    const nextNumber = array[index + 1];

    if (biggestNumber < nextNumber) {
      biggestNumber = nextNumber;
    }
  }

  return biggestNumber;
}

console.log(biggestNumberFunc(numbers1));

//Usando reduce
const biggestNumberArrow = (anterior, atual) => ((anterior > atual) ? anterior : atual);
const biggestNumber = numbers1.reduce(biggestNumberArrow)

console.log(biggestNumber);
