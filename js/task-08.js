const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
    event.preventDefault();

    let email = event.currentTarget.elements.email.value;
    let password = event.currentTarget.elements.password.value;

    if (email === '' || password === '') {
        alert('All fields should be filled in');
    } else {
        const loginData = {
            email,
            password,
        }
        console.log(loginData)

        form.reset()
    }
    
}
