const e=document.querySelector(".login-form");e.addEventListener("submit",(function(t){t.preventDefault();const n=e.elements.email.value,o=e.elements.password.value;if(""===n||""===o)return alert("Всі поля повинні бути заповнені!");const s={login:n,password:o};console.log(s),e.reset()}));
//# sourceMappingURL=task-08.5ef5db46.js.map
