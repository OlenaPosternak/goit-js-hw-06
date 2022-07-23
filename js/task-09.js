// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при 
// клике на button.change-color и выводит значение цвета в span.color.

const bodyEl = document.querySelector(`body`);
const changeColorBtn= document.querySelector(`.change-color`);
const colorInfo = document.querySelector(`.color`);


changeColorBtn.addEventListener(`click`, changeColor);

function changeColor(event){
    // textSpan.style.setProperty(`font-size`, inputForm.value+`px`)
    bodyEl.style.setProperty(`background-color`, getRandomHexColor());
    colorInfo.textContent = getRandomHexColor();
 

};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
