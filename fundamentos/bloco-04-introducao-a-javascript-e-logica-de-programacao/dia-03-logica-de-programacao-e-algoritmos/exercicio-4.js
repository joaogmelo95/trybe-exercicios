let n = 5;
let linha = '';
let metade = (n + 1) / 2;
let esquerda = metade;
let direita = metade;

for (let index = 0; index <= metade; index += 1) {
  for (let index2 = 0; index2 <= n; index2 += 1) {
    if (index2 > esquerda && index2 < direita) {
      linha += "*";
    } else {
      linha += " ";
    }
  }
  console.log(linha);
  linha = '';
  direita += 1;
  esquerda -= 1
};