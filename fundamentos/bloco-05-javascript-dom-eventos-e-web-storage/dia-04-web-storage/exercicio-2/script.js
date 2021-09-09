// Cria a array com os textos
const textArray = document.querySelectorAll('.text');

// Localiza os selectors
const backgroundColorSelector = document.querySelector('#background-color');
const fontColorSelector = document.getElementById('font-color');
const fontSizeSelector = document.getElementById('font-size');
const lineHeightSelector = document.getElementById('line-height');
const fontFamilySelector = document.getElementById('font-family');

window.onload = function() {
    if (localStorage.length > 0) {
        // Cor de fundo
        document.body.style.backgroundColor = localStorage.getItem('backgroundColor');

        // Cor da fonte
        changeTextColor(localStorage.getItem('fontColor'));

        // Tamanho da fonte
        changeTextFontSize(localStorage.getItem('fontSize'));

        // Altura da linha
        changeTextLineHeight(localStorage.getItem('lineHeight'));

        // Fonte
        changeTextFontFamily(localStorage.getItem('fontFamily'))

    } else {
        // Inicializa o localStorage com as chaves necessárias
        localStorage.setItem('backgroundColor', 'white');
        localStorage.setItem('fontColor', 'black');
        localStorage.setItem('fontSize', '12px');
        localStorage.setItem('lineHeight', '12px');
        localStorage.setItem('fontFamily', 'Times');
    }
};

// Mudar a cor do plano de fundo
function changeBackgroundColor() {
    let value = backgroundColorSelector.value;
    if (value === 'background-white') {
        document.body.style.backgroundColor = 'white';
        localStorage.setItem('backgroundColor', 'white');
    } else if (value === 'background-green') {
        document.body.style.backgroundColor = 'green';
        localStorage.setItem('backgroundColor', 'green');
    } else if (value === 'background-blue') {
        document.body.style.backgroundColor = 'blue';
        localStorage.setItem('backgroundColor', 'blue');
    } else if (value === 'background-yellow') {
        document.body.style.backgroundColor = 'yellow';
        localStorage.setItem('backgroundColor', 'yellow');
    } else if (value === 'background-black') {
        document.body.style.backgroundColor = 'black';
        localStorage.setItem('backgroundColor', 'black');
    }
}

backgroundColorSelector.addEventListener('change', changeBackgroundColor);

// Mudar a cor da fonte
function changeFontColor() {
    let value = fontColorSelector.value;
    if (value === 'font-black') {
        changeTextColor('black');
    } else if (value === 'font-green') {
        changeTextColor('green');
    } else if (value === 'font-blue') {
        changeTextColor('blue');
    } else if (value === 'font-yellow') {
        changeTextColor('yellow');
    } else if (value === 'font-white') {
        changeTextColor('white');
    } 
}

function changeTextColor(color) {
    for (let kid of textArray) {
        kid.style.color = color;
        localStorage.setItem('fontColor', color);
    }
}

fontColorSelector.addEventListener('change', changeFontColor);

// Mudar o tamanho da fonte
function changeFontSize() {
    let value = fontSizeSelector.value;
    if (value === 'font-12') {
        changeTextFontSize('12px');
    } else if (value === 'font-14') {
        changeTextFontSize('14px');
    } else if (value === 'font-16') {
        changeTextFontSize('16px');
    } else if (value === 'font-18') {
        changeTextFontSize('18px');
    } else if (value === 'font-20') {
        changeTextFontSize('20px');
    } 
}

function changeTextFontSize(size) {
    for (let kid of textArray) {
        kid.style.fontSize = size;
        localStorage.setItem('fontSize', size);
    }
}

fontSizeSelector.addEventListener('change', changeFontSize);

// Mudar o tamanho da altura da linha
function changeLineHeight() {
    let value = lineHeightSelector.value;
    if (value === 'line-height-12') {
        changeTextLineHeight('12px');
    } else if (value === 'line-height-14') {
        changeTextLineHeight('14px');
    } else if (value === 'line-height-16') {
        changeTextLineHeight('16px');
    } else if (value === 'line-height-18') {
        changeTextLineHeight('18px');
    } else if (value === 'line-height-20') {
        changeTextLineHeight('20px');
    } 
}

function changeTextLineHeight(size) {
    for (let kid of textArray) {
        kid.style.lineHeight = size;
        localStorage.setItem('lineHeight', size);
    }
}

lineHeightSelector.addEventListener('change', changeLineHeight);

// Mudar a fonte dos textos
function changeFontFamily() {
    let value = fontFamilySelector.value;
    if (value === 'font-family-times') {
        changeTextFontFamily('Times');
    } else if (value === 'font-family-verdana') {
        changeTextFontFamily('Verdana');
    } else if (value === 'font-family-cursive') {
        changeTextFontFamily('cursive');
    } else if (value === 'font-family-fantasy') {
        changeTextFontFamily('fantasy');
    }
}

function changeTextFontFamily(font) {
    for (let kid of textArray) {
        kid.style.fontFamily = font;
        localStorage.setItem('fontFamily', font);
    }
}

fontFamilySelector.addEventListener('change', changeFontFamily);