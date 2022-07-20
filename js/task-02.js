const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.


// Перебираємо масив та на кожній ітерації створюємо новий li (також додаємо класс і текстовий контент)

const creatListElements = ingredients.map(function (element){

    const el=document.createElement(`li`);
    console.log(el);
    
    el.classList.add(`item`)
    el.textContent=element;

    return el;

});

// прикріпляємо наш список до батьківського елементу
const allIngridients = document.querySelector(`#ingredients`);
allIngridients.append(...creatListElements);

