let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//crescente
for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
}

  console.log(numbers)


//decrescente
for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] > numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
}

console.log(numbers)


//multiplicacao
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMultiplied = [];

for (let index = 0; index < numbers.length; index += 1) {
    if (index !== numbers.length - 1) {
        numbersMultiplied.push(numbers[index] * numbers[index + 1]);
    } else {
        numbersMultiplied.push(numbers[index] * 2);
    }
}

console.log(numbersMultiplied);