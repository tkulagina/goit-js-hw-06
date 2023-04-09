const refs = {
    formRef: document.querySelector('.login-form'),
}

const onSubmit = (event) => {
    event.preventDefault()
    const emailInputRef = refs.formRef.elements.email;
    const passwordInputRef = refs.formRef.elements.password;
    if (!emailInputRef.value || !passwordInputRef.value) {
        alert("Всі поля повинні бути заповнені!!!");
        return;
    }
    const object = {};
    object[emailInputRef.name] = emailInputRef.value;
    object[passwordInputRef.name] = passwordInputRef.value;
    console.log(object);
    refs.formRef.reset();
}

refs.formRef.addEventListener('submit', onSubmit);
