let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1
for (let number of numbers) {
    console.log(number);
}


//2
let numbersSum = 0;

for (let number of numbers) {
    numbersSum += number;
}

console.log('soma de todos os números é ' + numbersSum);


//3
let media = numbersSum / numbers.length;

console.log('a média é ' + media);


//4
if (media > 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20');
}


//5
let biggestValue = numbers[0];

for (let number of numbers) {
    if (number > biggestValue) {
        biggestValue = number;
    }
}

console.log('o maior número é: ' + biggestValue);


//6
let oddNummbers = 0;

for (let number of numbers) {
    if (number % 2 != 0) {
        oddNummbers += 1;
    }
}

if (oddNummbers > 0) {
    console.log('números ímpares = ' + oddNummbers);
} else {
    console.log('nenhum valor ímpar encontrado');
}


//7
let smallestNumber = numbers[0];

for (let number of numbers) {
    if (number < smallestNumber) {
        smallestNumber = number;
    }
}

console.log('o menor número é: ' + smallestNumber);


//8
let array = [];

for (let index = 1; index <= 25; index += 1) {
    array.push(index);
}

console.log(array)


//9
for (let value of array) {
    console.log(value/2);
}