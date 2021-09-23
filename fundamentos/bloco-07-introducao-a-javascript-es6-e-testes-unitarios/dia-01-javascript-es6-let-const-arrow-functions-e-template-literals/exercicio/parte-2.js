const fatorial = number => {
  let nFatorial = number;
  for (let index = 1; index < number; index += 1) {
    nFatorial *= index;
  }

  return nFatorial;
}

console.log(fatorial(5));

const longestWord = string => {
  let charCount = 0;
  let word = string.split(' ');
  let final = '';

  for (let index = 0; index < word.length; index += 1) {
      if (word[index].length > charCount) {
        charCount = word[index].length;
        final = word[index];
      }
  }

  return final;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));