// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const decrementBtn = document.querySelector(`[data-action="decrement"]`);
const incrementBtn = document.querySelector(`[data-action="increment"]`);
const counterInfo = document.querySelector(`#value`);

const counter = {
    counterValue: 0,

    increment (){
        this.counterValue+=1;
    },

    decrement (){
        this.counterValue-=1;

    },
}

decrementBtn.addEventListener(`click`, function(){
    counter.decrement();
    counterInfo.textContent = counter.counterValue;
})

incrementBtn.addEventListener(`click`, function(){
    counter.increment();
    counterInfo.textContent = counter.counterValue;
})