const inputEl = document.querySelector('#validation-input');


inputEl.addEventListener('blur', onBorderColorChange);

function onBorderColorChange(event) {

   const condition = event.currentTarget.value.length;
   const dataLength = Number(inputEl.dataset.length);

   if (dataLength !== condition) {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
   } 
   else {inputEl.classList.add('valid');
   inputEl.classList.remove('invalid');}     
}