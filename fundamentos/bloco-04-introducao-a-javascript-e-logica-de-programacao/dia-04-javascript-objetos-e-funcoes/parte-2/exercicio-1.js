let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem-vinda, ' + info.personagem);

info.recorrente = 'Sim';

console.log(info);

for (let key in info) {
    console.log(key);
}

for (let key in info) {
    console.log(info[key]);
}

let tioPatinhas = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};

console.log(info.personagem + 'e ' + tioPatinhas.personagem);
console.log(info.origem + 'e ' + tioPatinhas.origem);
console.log(info.nota + 'e ' + tioPatinhas.nota);

if (info.recorrente === 'Sim' && info.recorrente === tioPatinhas.recorrente) {
    console.log('Ambos recorrentes');
} else {
    console.log(info.recorrente + 'e ' + tioPatinhas.recorrente);
};