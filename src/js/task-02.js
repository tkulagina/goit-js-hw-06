const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

console.log(ingredients);

const ul = document.querySelector ('.js-list')


const arr= [];
for (i = 0; i < ingredients.length; i += 1) {
  const li = document.createElement ('.li');
  li.classList.add = item;
  li.textContent = ingredients[i];
arr.push(li);
}

ul.append(...arr);

console.log(arr);