const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

console.log(ingredients);

const refs = {
  items: document.querySelectorAll('.js-ingredients'),
  ul: document.querySelector ('.ul'),
}

const arr= [];
for (i = 0; i < ingredients.length; i += 1) {
  const li = document.createElement ('.li');
  li.classList.add = item;
  li.textContent = ingredients[i];
arr.push(li);
}

refs.ul.append(...arr);

console.log(arr);