let repeticao = [2, 3, 2, 5, 8, 2, 3];

function checkRepeticoes(array) {
    let numeroAnalisado = undefined;
    let repeticoes = 0;
    let numerosQueRepetem = [];
    
    let numeroQueMaisRepete = {
        numero: undefined,
        aparicoes: 0
    };
    
    for (let index = 0; index < array.length; index += 1) {
    
        numeroAnalisado = array[index];
    
        for (let index2 = 0; index2 < array.length; index2 +=1) {
            if (numeroAnalisado === array[index2]) {
                repeticoes += 1;
            };
        };
    
        let numeroRepetido = {
            numero: numeroAnalisado,
            aparicoes: repeticoes
        };
        
        if (numeroRepetido.aparicoes > 1) {
            numerosQueRepetem.push(numeroRepetido);
        };
    
        numeroAnalisado = undefined;
        repeticoes = 0;
    
        if (numerosQueRepetem.length > 0) {
            for (let numero of numerosQueRepetem) {
                if (numeroQueMaisRepete.aparicoes < numero.aparicoes) {
                    numeroQueMaisRepete.aparicoes = numero.aparicoes;
                    numeroQueMaisRepete.numero = numero.numero;
                };
            };
        };
    };
    
    return numeroQueMaisRepete.numero;
}

console.log(checkRepeticoes(repeticao));