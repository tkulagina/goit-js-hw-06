const refs = {
    btnDecrementRef: document.querySelector('[data-action="decrement"]'),
    btnIncrementRef: document.querySelector('[data-action="increment"]'),
    valueRef: document.querySelector('#value'),
}

let counterValue = 0;

function bindClickEvents() {   
    refs.btnIncrementRef.addEventListener('click', () => {increment(); updateValue() })
    refs.btnDecrementRef.addEventListener('click', () => {decrement(); updateValue() })
}

function increment() {
    counterValue += 1;
}

function decrement() {
    counterValue -= 1;
}

function updateValue() {
    refs.valueRef.textContent = counterValue;
}

bindClickEvents()