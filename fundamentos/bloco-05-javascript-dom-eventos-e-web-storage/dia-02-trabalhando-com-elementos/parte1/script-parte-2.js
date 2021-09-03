const pai = document.getElementById('pai');

for (let index = pai.children.length - 1; index >= 0; index -= 1) {
    const elemento = pai.children[index];
    if (elemento.id !== 'elementoOndeVoceEsta') {
    elemento.remove();
    }
}

const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();