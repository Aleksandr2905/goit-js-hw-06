const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const login = form.elements.email.value;
    const password = form.elements.password.value;
    if (login === '' || password === '') {
        return alert('Всі поля повинні бути заповнені!');        
    }
    const data = {login, password};
    console.log(data);
    form.reset();
}
