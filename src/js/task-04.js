const counter = document.querySelector('#value');
const oneMinus = document.querySelector('button[data-action="decrement"]');
const onePlus = document.querySelector('button[data-action="increment"]');

function task4 () {
    let counterValue = 0;
    const handleClickMinus = () => {
        counterValue -= 1;
        counter.textContent = counterValue;
    };
    oneMinus.addEventListener('click', handleClickMinus);

    const handleClickPlus = () => {
        counterValue += 1;
        counter.textContent = counterValue;
    };
        onePlus.addEventListener('click', handleClickPlus);
};
task4();