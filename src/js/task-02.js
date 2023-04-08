const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

console.log(ingredients);

const ul = document.querySelector ('#ingredients')


const arr= [];
ingredients.forEach(function (ingredient) {
  const li = document.createElement ('li');
  li.classList.add = 'item';
  li.textContent = ingredient;
arr.push(li);
})

ul.append(...arr);

console.log(arr);