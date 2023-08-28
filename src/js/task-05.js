const usernameInputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');


usernameInputEl.addEventListener('input', event => {
    if (usernameInputEl.value === '') {
        outputEl.innerHTML = "Anonymous";

        return;
    };
    outputEl.textContent = `${usernameInputEl.value}`;
});