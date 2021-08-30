function somatorio(a) {
    let soma = 0;
    for (let index = 0; index <= a; index += 1) {
        soma += index;
    };

    return soma;
};

console.log(somatorio(10));