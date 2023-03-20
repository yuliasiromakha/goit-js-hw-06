const inputEl = document.querySelector('input');
const spanEl = document.querySelector('span');

const fontCange = inputEl.addEventListener('input', () => {spanEl.style.fontSize = inputEl.value + 'px';});