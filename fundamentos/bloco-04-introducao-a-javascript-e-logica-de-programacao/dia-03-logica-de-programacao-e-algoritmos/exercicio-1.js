let n = 7;

if (n > 0) {
    for (let index = 0; index < n; index += 1) {
        let linha = "";
        for (let index2 = 0; index2 < n; index2 += 1) {
            linha += "*";
        }
        console.log(linha);
    }
}