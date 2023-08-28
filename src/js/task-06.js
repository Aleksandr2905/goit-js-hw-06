const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputElBlur);

function onInputElBlur (event) {
    const inputValue = inputEl.value.length;    
    const inputLength = +inputEl.dataset.length;
    if (inputValue === inputLength) {
        inputEl.classList.add('valid')
        if (inputEl.classList.contains('invalid')) {
			inputEl.classList.remove('invalid')
		}
    } else {inputEl.classList.add('invalid')
        if (inputEl.classList.contains('valid')) 
			inputEl.classList.remove('valid')        
    };        
         
};



