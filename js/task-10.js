// Создай функцию createBoxes(amount), которая принимает один параметр - число.
//  Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.


const inputForm = document.querySelector(`input`);
inputForm.addEventListener(`input`, onInputChanges);


function onInputChanges (){
    let newValue = Number(inputForm.value);
    createBoxes(newValue);
};


function createBoxes (amount){
    console.log (amount);
}

console.log(createBoxes());




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
