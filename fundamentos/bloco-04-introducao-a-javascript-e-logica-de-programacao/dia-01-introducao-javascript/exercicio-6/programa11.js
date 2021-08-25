const salarioBruto = 3000;
let salarioLiquido;
let aliquotaINSS;
let aliquotaIR;
let deducaoImposto;

//Calcula INSS
if (salarioBruto <= 1556.94) {
    aliquotaINSS = salarioBruto * 0.08;
    salarioLiquido = salarioBruto - aliquotaINSS;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    aliquotaINSS = salarioBruto * 0.09;
    salarioLiquido = salarioBruto - aliquotaINSS;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    aliquotaINSS = salarioBruto * 0.11;
    salarioLiquido = salarioBruto - aliquotaINSS;
} else {
    aliquotaINSS = 570.88;
    salarioLiquido = salarioBruto - aliquotaINSS;
}

//Calcula IR
if (salarioLiquido <= 1903.98) {
    deducaoImposto = 0;
    aliquotaIR = 0;
    salarioLiquido = salarioLiquido - aliquotaIR;
} else if (salarioLiquido >= 1903.99 && salarioLiquido <= 2826.65) {
    deducaoImposto = 142.8;
    aliquotaIR = (salarioLiquido * 0.075) - deducaoImposto;
    salarioLiquido = salarioLiquido - aliquotaIR;
} else if (salarioLiquido >= 2826.66 && salarioLiquido <= 3751.05) {
    deducaoImposto = 354.8;
    aliquotaIR = (salarioLiquido * 0.15) - deducaoImposto;
    salarioLiquido = salarioLiquido - aliquotaIR;
} else if (salarioLiquido >= 3751.06 && salarioLiquido <= 4664.68) {
    deducaoImposto = 636.13;
    aliquotaIR = (salarioLiquido * 0.225) - deducaoImposto;
    salarioLiquido = salarioLiquido - aliquotaIR;
} else {
    deducaoImposto = 869.36;
    aliquotaIR = (salarioLiquido * 0.275) - deducaoImposto;
    salarioLiquido = salarioLiquido - aliquotaIR;
}

console.log(salarioLiquido);