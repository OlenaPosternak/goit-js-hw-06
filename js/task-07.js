// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и
// изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.

const inputForm = document.querySelector(`#font-size-control`);
const textSpan = document.querySelector(`#text`);


inputForm.addEventListener(`input`, onInputChanges);

function onInputChanges(){

    textSpan.style.setProperty(`font-size`, inputForm.value+`px`)
    // console.log(inputForm.value);  
  
}