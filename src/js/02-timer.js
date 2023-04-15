import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Ukrainian } from "flatpickr/dist/l10n/uk.js"

const refs = {
    inputDate: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('button[data-start]'),

    seconds: document.querySelector('.seconds-js'),
    minutes: document.querySelector('.minutes-js'),
    hours: document.querySelector('.hours-js'),
    days: document.querySelector('.days-js'),
};

const options = {
    "locale": Ukrainian,
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        // console.log(selectedDates[0]);
    },
};

const deadLine = new Date (2024, 0, 1)
const CURRENT_DATA = new Date();
const delta = deadLine - CURRENT_DATA;
console.log(delta)
const toSeconds = delta / 1000;

const fp = flatpickr("input#datetime-picker", options);

let choseDate = fp.selectedDates[0];

let timerId = null;

timerId = setInterval(() => {
    const seconds = Math.floor(toSeconds) % 60;
    const minutes = Math.floor(toSeconds / 60) % 60;
    const hours = Math.floor(toSeconds / 60 / 60) % 24;
    const days = Math.floor(toSeconds / 60 / 60 / 24);
    
    refs.seconds.textContent = seconds;
    refs.minutes.textContent = minutes;
    refs.hours.textContent = hours;
    refs.days.textContent = days;

    console.log(seconds)
    console.log(minutes)
    console.log(hours)
    console.log(days)
  }, 1000);
















const onImput = refs.inputDate.addEventListener("onChange", (evt) => {
    let choseDate = fp.selectedDates[0];
    refs.startBtn.setAttribute("disabled", "disabled")
console.log("ввод")
});



// const onStartCount = refs.startBtn.addEventListener("click", (evt) => {

//     resultSelectedDat = fp.selectedDates[0];

//     // console.log("перевірка");

//     if (resultSelectedDat < CURRENT_DATA) {
//         window.alert("Please choose a date in the future")
//         // refs.startBtn.setAttribute("disabled", "disabled");
//     } 
// });















// Метод onClose() з об'єкта параметрів викликається 
// щоразу під час закриття елемента інтерфейсу, 
// який створює flatpickr. Саме у ньому варто обробляти дату,
// обрану користувачем. Параметр selectedDates - це масив обраних дат,
// тому ми беремо перший елемент.

    // console.log(selectedDates[0]);
    // 1 
    // Якщо користувач вибрав дату в минулому, покажи window.alert() 
    // з текстом "Please choose a date in the future".
    // if (inputData <= CURRENT_DATA) {

    //     window.alert("Please choose a date in the future")
    // };
    // 2
    // Якщо користувач вибрав валідну дату (в майбутньому),
    // кнопка «Start» стає активною.

    // 3
    // Кнопка «Start» повинна бути неактивною доти,
    // доки користувач не вибрав дату в майбутньому.

    // 4
    // Кнопка «Start» повинна бути неактивною доти,
    // доки користувач не вибрав дату в майбутньому.


