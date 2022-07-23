// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
//  подставляет его текущее значение в span#name-output.
//  Если инпут пустой, в спане должна отображаться строка "Anonymous".

const input = document.querySelector(`#name-input`);
const output = document.querySelector(`#name-output`);
console.log(output);

input.addEventListener(`input`,onInputChanges);


function onInputChanges (event){
output.textContent = event.currentTarget.value
if(event.currentTarget.value.trim()===""){
    output.textContent = "Anonymous";
}};
