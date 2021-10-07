//2 - Faça uma função que some todos os números pares do array:
const numbers2 = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const sumEven = (result, number) => ((number % 2 === 0) ? result += number : result);
const sumOfEvenNumbers = numbers2.reduce(sumEven);

console.log(sumOfEvenNumbers);
