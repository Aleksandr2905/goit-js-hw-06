const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];
  
function task2() {    
  const list = document.querySelector('#ingredients');
  const newArr = [];
  ingredients.forEach((el) => {
    const item = document.createElement('li');  
    item.classList.add('item');
    item.textContent = el;
    newArr.push(item);
    });

  list.append(...newArr);
}
task2();




