function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const body = document.querySelector('body');
const changeBtn = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

changeBtn.addEventListener('click', event => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanColor.textContent = color;
  
});
