function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlInputs = document.querySelector('#controls');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const inputNumber = controlInputs.querySelector('input');
const boxesNumber = document.querySelector('#boxes');
  
function createBoxes(inputAmount) {
  const arr = [];
  for (let i = 0; i < inputAmount; i += 1) {
    const p = document.createElement('p');
    p.style.width = `${30 + i * 10}px`;
    p.style.height = `${30 + i * 10}px`;
    p.style.backgroundColor = getRandomHexColor();
    arr.push(p);
  }
boxesNumber.append(...arr);
}

function destroyBoxes() {
  boxesNumber.innerHTML = "";
}

btnCreate.addEventListener ('click', () => {
  createBoxes(inputNumber.value);
});
btnDestroy.addEventListener ('click', () => {
  destroyBoxes();
});


