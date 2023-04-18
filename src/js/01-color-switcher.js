let timerId = null;
const DELAY_VALUE = 1000;

// посилання на елементи
const refs = {
  body: document.querySelector("body"),
  startBtn: document.querySelector(".js-start"),
  stopBtn: document.querySelector(".js-stop"),
};

// кнопка запуску
refs.startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
    }
    // console.log(getRandomHexColor())
    refs.body.style.backgroundColor = getRandomHexColor();
  }, DELAY_VALUE);
  refs.startBtn.setAttribute("disabled", "disabled");
});

// кнопка зупинки
refs.stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  // console.log(`Interval with id ${timerId} has stopped!`);
  // var b = document.querySelector(".js-start");
  refs.startBtn.removeAttribute("disabled", "disabled");
});