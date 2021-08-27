let n = 5;
let metade = (n + 1) / 2;
let esquerda = metade;
let direita = metade;

for (let line = 1; line <= metade; line += 1) {
  let linhaFinal = '';
  for (let coluna = 1; coluna <= n; coluna += 1) {
    if (coluna == esquerda || coluna == direita || line == metade) {
      linhaFinal += "*";
    } else {
      linhaFinal += ' ';
    }
  }
  esquerda -= 1;
  direita += 1;
  console.log(linhaFinal);
}