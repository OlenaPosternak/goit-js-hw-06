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

// inputForm.addEventListener(`input`, onInputChanges);
createBtn.addEventListener(`click`, onInputChanges);
destroyBtn.addEventListener(`click`, onDestroyElements)


function onInputChanges (){
    let newValue = Number(inputForm.value);
    createBoxes(newValue);
};

function createBoxes (amount){
    let arr =[];
    for (let i =1; i<=amount; i++){
        arr.push(i);
    }
    
    const newDiv = arr.map(function (){
        const el=document.createElement(`div`);
        return el;
    
    });

    let style = {
        width: 30,
        height:30,
    };


    for (let i=0; i<arr.length; i++){
        let element = newDiv[i];
        element.style.width=style.width+10*i+`px`;
        element.style.height=style.height+10*i+`px`;
        element.style.setProperty(`background-color`, getRandomHexColor());

    }


    parentDiv.append(...newDiv);


}

function onDestroyElements (){
    parentDiv.innerHTML = '';

}




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
