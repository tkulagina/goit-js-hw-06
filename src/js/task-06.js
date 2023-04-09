const refs = {
    inputRef: document.querySelector("#validation-input"),
}

refs.inputRef.addEventListener('blur', onCountLetters);

function onCountLetters() {
    if (Number(refs.inputRef.dataset.length) === refs.inputRef.value.length) {
        replaceClasses('valid', 'invalid');
        return;
    } 
        replaceClasses('invalid', 'valid');
}
const replaceClasses = (classToAdd, classToRemove) => {
    refs.inputRef.classList.remove(classToRemove)
    refs.inputRef.classList.add(classToAdd)
}