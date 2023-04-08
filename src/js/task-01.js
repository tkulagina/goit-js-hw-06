const listOfCategories = document.querySelector('#categories');
console.log ('Number of categories:', listOfCategories.children.length);

/*const dataBaseOfItems = listOfCategories.querySelectorAll('li.item');
//console.log (dataBaseOfItems);

const namesOfCategories = listOfCategories.querySelector('h2');
//console.log (namesOfCategories);
console.log ('Category:', namesOfCategories.textContent);


const itemsOfList = namesOfCategories.nextElementSibling;
//console.log (itemsOfList);

const finalList = itemsOfList.querySelectorAll('li');
//console.log (finalList);
console.log ('Elements:', finalList.length);*/



function getListOfCategoies (listOfCategories) {

    const dataBaseOfItems = listOfCategories.querySelectorAll('li.item');
    console.log (dataBaseOfItems);


dataBaseOfItems.forEach (function () {
    const nameOfList = dataBaseOfItems.querySelector('h2');
    console.log (nameOfList.textContent);
    const itemsOfList = namesOfCategories.nextElementSibling;
    const finalList = itemsOfList.querySelectorAll('li');
    console.log ('Elements:', finalList.length);
})
}