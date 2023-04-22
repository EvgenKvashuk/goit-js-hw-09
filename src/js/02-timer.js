import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Ukrainian } from "flatpickr/dist/l10n/uk.js"
import Notiflix from 'notiflix';

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
        let CURRENT_DATA = new Date();
        let choseDate = fp.selectedDates[0];
        if (choseDate > CURRENT_DATA) {
            refs.startBtn.removeAttribute("disabled", "disabled");
        }
        if (choseDate < CURRENT_DATA) {
            // window.alert("Please choose a date in the future")
            Notiflix.Notify.failure("Please choose a date in the future");
            refs.startBtn.setAttribute("disabled", "disabled");
        }
    },
};

const fp = flatpickr("input#datetime-picker", options);

refs.startBtn.addEventListener("click", (evt) => {
    refs.startBtn.setAttribute("disabled", "disabled");
    
    function pad(value) {
        return String(value).padStart(2, '0')
    }

    let timerId = null;

    timerId = setInterval(() => {
        let choseDate = fp.selectedDates[0];
        let CURRENT_DATA = new Date();
        let delta = choseDate - CURRENT_DATA;
        let toSeconds = delta / 1000;

        let seconds = pad(Math.floor(delta / 1000) % 60);
        let minutes = pad(Math.floor(delta / 1000 / 60) % 60);
        let hours = pad(Math.floor(delta / 1000 / 60 / 60) % 24);
        let days = Math.floor(delta / 1000 / 60 / 60 / 24);

        const pushSeconds = seconds > 0 ? refs.seconds.textContent = seconds : refs.seconds.textContent = "00";
        const pushMinutes = minutes > 0 ? refs.minutes.textContent = minutes : refs.minutes.textContent = "00";
        const pushHours = hours > 0 ? refs.hours.textContent = hours : refs.hours.textContent = "00";
        const pushDays = days > 0 ? refs.days.textContent = days : refs.days.textContent = "00";
    }, 1000);
});






// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
// import { Ukrainian } from "flatpickr/dist/l10n/uk.js"
// import Notiflix from 'notiflix';

// const refs = {
//     inputDate: document.querySelector('#datetime-picker'),
//     startBtn: document.querySelector('button[data-start]'),

//     seconds: document.querySelector('.seconds-js'),
//     minutes: document.querySelector('.minutes-js'),
//     hours: document.querySelector('.hours-js'),
//     days: document.querySelector('.days-js'),
// };

// refs.startBtn.setAttribute("disabled", "disabled");

// const options = {
//     "locale": Ukrainian,
//     enableTime: true,
//     time_24hr: true,
//     defaultDate: new Date(),
//     minuteIncrement: 1,
//     onClose(selectedDates) {

//     },
// };

// const fp = flatpickr("input#datetime-picker", options);

// refs.inputDate.addEventListener("input", (evt) => {
//     let CURRENT_DATA = new Date();
//     let choseDate = fp.selectedDates[0];
//     // Показує сповіщення("Please choose a date in the future") якщо обрана дата в минулому.
//     if (choseDate > CURRENT_DATA) {
//         refs.startBtn.removeAttribute("disabled", "disabled");
//     }
//     // Якщо користувач вибрав валідну дату (в майбутньому), кнопка «Start» стає активною.
//     // Кнопка «Start» неактивною доти, доки користувач не вибере дату в майбутньому.
//     if (choseDate < CURRENT_DATA) {
//         // window.alert("Please choose a date in the future")
//         Notiflix.Notify.failure("Please choose a date in the future");
//         refs.startBtn.setAttribute("disabled", "disabled");
//     }
// });

// refs.startBtn.addEventListener("click", (evt) => {

//     function pad(value) {
//         return String(value).padStart(2, '0')
//     }

//     let timerId = null;

//     timerId = setInterval(() => {
//         let choseDate = fp.selectedDates[0];
//         let CURRENT_DATA = new Date();
//         let delta = choseDate - CURRENT_DATA;
//         let toSeconds = delta / 1000;

//         let seconds = pad(Math.floor(delta / 1000) % 60);
//         let minutes = pad(Math.floor(delta / 1000 / 60) % 60);
//         let hours = pad(Math.floor(delta / 1000 / 60 / 60) % 24);
//         let days = Math.floor(delta / 1000 / 60 / 60 / 24);

//         const pushSeconds = seconds > 0 ? refs.seconds.textContent = seconds : refs.seconds.textContent = "00";
//         const pushMinutes = minutes > 0 ? refs.minutes.textContent = minutes : refs.minutes.textContent = "00";
//         const pushHours = hours > 0 ? refs.hours.textContent = hours : refs.hours.textContent = "00";
//         const pushDays = days > 0 ? refs.days.textContent = days : refs.days.textContent = "00";
//     }, 1000);

// });