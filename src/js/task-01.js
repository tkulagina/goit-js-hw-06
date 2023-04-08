const listOfCategories = document.querySelector('#categories');
console.log ('Number of categories:', listOfCategories.children.length);

    const dataBaseOfItems = listOfCategories.querySelectorAll('li.item');
    //console.log (dataBaseOfItems);


dataBaseOfItems.forEach (function (item) {
    const nameOfList = item.querySelector('h2');
    console.log ('Category:', nameOfList.textContent);
    const itemsOfList = nameOfList.nextElementSibling;
    const finalList = itemsOfList.querySelectorAll('li');
    console.log ('Elements:', finalList.length);
})
