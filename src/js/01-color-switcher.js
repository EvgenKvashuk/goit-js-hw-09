let timerId = null;
DELAY_VALUE = 1000;

const refs = {
  body: document.querySelector("body"),
  startBtn: document.querySelector(".js-start"),
  stopBtn: document.querySelector(".js-stop"),
};

refs.startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
    }
    console.log(getRandomHexColor())
    refs.body.style.backgroundColor = getRandomHexColor();
  }, DELAY_VALUE);
});

refs.stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  console.log(`Interval with id ${timerId} has stopped!`);
});


// при запуску одного інтервалу цого можна зупинити, 
// але якщо запустити два і більше то їх вже не можливо зупинити. 
// Як можна обмежити запуск більше двух інтервалів? Бо чим більше інтервалів тим частіше міняється фон.