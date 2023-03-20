let counterValue = 0; 

const decr = document.querySelector('button[data-action="decrement"]');
const incr = document.querySelector('button[data-action="increment"]');
const span = document.getElementById('value');

incr.addEventListener('click', onAddNumber);
decr.addEventListener('click', onRemoveNumber)

function onAddNumber() {
    counterValue += 1;
    span.textContent = counterValue;
}

function onRemoveNumber() {
    counterValue -= 1;
    span.textContent = counterValue;
}