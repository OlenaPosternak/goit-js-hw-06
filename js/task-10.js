// Создай функцию createBoxes(amount), которая принимает один параметр - число.
//  Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.


const inputForm = document.querySelector(`input`);
const parentDiv = document.querySelector(`#boxes`);
const createBtn = document.querySelector(`[data-create]`);
const destroyBtn = document.querySelector(`[data-destroy]`);

createBtn.addEventListener(`click`, onInputChanges);
destroyBtn.addEventListener(`click`, onDestroyElements)


function onInputChanges (){
    let newValue = Number(inputForm.value);
    createBoxes(newValue);
};

function createBoxes (amount){
    const newDiv = [];
    for(let i = 0; i < amount; i++){
        let element = document.createElement(`div`);
        element.style.width = 30 + 10*i + `px`;
        element.style.height = 30 + 10*i + `px`;
        element.style.setProperty(`background-color`, getRandomHexColor());
        newDiv.push(element);
    }

    parentDiv.append(...newDiv);
}

function onDestroyElements (){
    parentDiv.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}