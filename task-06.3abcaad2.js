const s=document.querySelector("#validation-input");s.addEventListener("blur",(function(a){const i=s.value.length,t=+s.dataset.length;i===t?(s.classList.add("valid"),s.classList.contains("invalid")&&s.classList.remove("invalid")):(s.classList.add("invalid"),s.classList.contains("valid")&&s.classList.remove("valid"))}));
//# sourceMappingURL=task-06.3abcaad2.js.map
