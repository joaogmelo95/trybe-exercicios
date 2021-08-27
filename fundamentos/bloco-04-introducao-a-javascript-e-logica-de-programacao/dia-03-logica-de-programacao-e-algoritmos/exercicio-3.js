let n = 5;
let linha = "";
let posicao = n;

for (index = 0; index < n; index +=1) {
    for (index2 = 0; index2 <= n; index2 +=1) {
        if (index2 < posicao) {
            linha += " ";
        } else {
            linha += "*";
        }
    }
    console.log(linha)
    linha = "";
    posicao -= 1;
}
