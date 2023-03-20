const input = document.getElementById('name-input');
const span = document.getElementById('name-output');

input.addEventListener('input', onChange);

function onChange(event) {
    console.log(event.currentTarget.value);

    if (event.currentTarget.value === '') {
        return span.textContent = 'Anonymous';
    }

    span.textContent = event.currentTarget.value;
}
