//Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .
const pai = document.querySelector("#pai");
let filhosPai = pai.children;

for (let index = 0; index < filhosPai.length; index += 1) {
    let element = filhosPai[index];

    if (element.id !== "elementoOndeVoceEsta") {
        element.remove()
    }
}

const quartoEUltimoFilho = document.querySelector("#quartoEUltimoFilho");
pai.removeChild(quartoEUltimoFilho);

const segundoEUltimoFilho = document.querySelector("#segundoEUltimoFilhoDoFilho");
elementoOndeVoceEsta.removeChild(segundoEUltimoFilho);