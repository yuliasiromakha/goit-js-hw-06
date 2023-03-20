const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef= document.getElementById('ingredients');

const ingredientsArray = ingredients.map( item => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('.item');
  itemEl.textContent = item;
  return itemEl;
} )

ingredientsRef.append(...ingredientsArray);
