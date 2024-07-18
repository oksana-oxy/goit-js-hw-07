const registForm = document.querySelector('.login-form');

registForm.addEventListener('submit', onRegistForm);

function onRegistForm(event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('All form fields must be filled in')
    };

    const formElements = { email: email.value, Password: password.value };
    
    console.log(formElements);
    event.currentTarget.reset();
}
