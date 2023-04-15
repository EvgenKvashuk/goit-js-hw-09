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

refs.startBtn.setAttribute("disabled", "disabled");

const options = {
    "locale": Ukrainian,
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    },
};

const fp = flatpickr("input#datetime-picker", options);








refs.inputDate.addEventListener("input", (evt) => {
    let CURRENT_DATA = new Date();


    let choseDate = fp.selectedDates[0];
    // Якщо користувач вибрав дату в минулому, покажи window.alert() з текстом "Please choose a date in the future".
    if (choseDate > CURRENT_DATA) {
        refs.startBtn.removeAttribute("disabled", "disabled");
    }
    // Якщо користувач вибрав валідну дату (в майбутньому), кнопка «Start» стає активною.
    // Кнопка «Start» повинна бути неактивною доти, доки користувач не вибрав дату в майбутньому.
    if (choseDate < CURRENT_DATA) {
        window.alert("Please choose a date in the future")
    }
});





















refs.inputDate.addEventListener("submit", (evt) => {
    function convertMs(ms) {
        // Number of milliseconds per unit of time
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        // Remaining days
        const days = Math.floor(ms / day);
        // Remaining hours
        const hours = Math.floor((ms % day) / hour);
        // Remaining minutes
        const minutes = Math.floor(((ms % day) % hour) / minute);
        // Remaining seconds
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);

        return { days, hours, minutes, seconds };
    }

    console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
    console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
    console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
});






















// запус таймера
// let timerId = null;

// timerId = setInterval(() => {
//     let deadLine = new Date (2024, 0, 1)
//     let CURRENT_DATA = new Date();
//     let delta = deadLine - CURRENT_DATA;
//     let toSeconds = delta / 1000;

//     let seconds = Math.floor(delta / 1000) % 60;
//     let minutes = Math.floor(delta / 1000 / 60) % 60;
//     let hours = Math.floor(delta / 1000 / 60 / 60) % 24;
//     let days = Math.floor(delta / 1000 / 60 / 60 / 24);

//     refs.seconds.textContent = seconds;
//     refs.minutes.textContent = minutes;
//     refs.hours.textContent = hours;
//     refs.days.textContent = days;

//     // console.log(seconds)
//     // console.log(minutes)
//     // console.log(hours)
//     // console.log(days)
// }, 1000);

