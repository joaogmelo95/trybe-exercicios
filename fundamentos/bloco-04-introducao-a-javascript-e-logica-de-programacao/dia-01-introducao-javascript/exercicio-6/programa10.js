const valorCusto = 100;
let valorCustoTotal;
const valorVenda = 200;
let lucro;

if (valorCusto < 0 || valorVenda < 0) {
    console.log("Valores inválidos");
} else {
    valorCustoTotal = valorCusto + (valorCusto * 0.2);
    lucro = (valorVenda - valorCustoTotal);
    console.log(lucro);
}