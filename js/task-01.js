// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, 
// найдет и выведет в консоль текст заголовка элемента (тега <h2>) и 
// количество элементов в категории (всех вложенных в него <li>).


// 1
const nameOfFullList = document.querySelector(`#categories`);
console.log(`Number of categories:`, nameOfFullList.childElementCount);

// 2

const nameOfCategories = nameOfFullList.querySelectorAll(`h2`);

const arr = nameOfCategories.forEach(function(name){
    console.log(`Category:`,name.textContent)
    console.log(`Elements`,name.nextElementSibling.childElementCount )
});

// Варіант 2 (через дітей)

// const allChildren = nameOfFullList.children;
// //Отримуємо псевдомасив і перетворюємо на масив
// const arr= Array.from(allChildren);

// const result = arr.forEach(function(name){
//     console.log(`Category:`, name.firstElementChild.textContent);
//     console.log(`Elements`,name.lastElementChild.childElementCount);

// })