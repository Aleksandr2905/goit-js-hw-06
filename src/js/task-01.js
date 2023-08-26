function task1() {
    const liItem = document.querySelectorAll('li.item');
    console.log(`Number of categories: ${liItem.length}`);

    liItem.forEach(el => {              
        console.log(`Category: ${el.firstElementChild.textContent}\nElements: ${el.lastElementChild.children.length}`);
    });
}
task1();