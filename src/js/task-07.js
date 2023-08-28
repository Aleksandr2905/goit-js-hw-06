const inputFontSizeBtn = document.querySelector('#font-size-control');

const spanText = document.querySelector('#text');

inputFontSizeBtn.addEventListener('change', event => {
    spanText.style.fontSize = `${inputFontSizeBtn.value}px`

});