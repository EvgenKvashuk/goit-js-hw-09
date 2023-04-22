import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),

  delay: document.querySelector('.delay_js'),
  step: document.querySelector('.step_js'),
  amount: document.querySelector('.amount_js'),

}


refs.form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const inputDate = {
    delay: Number(evt.target.elements.delay.value),
    step: Number(evt.target.elements.step.value),
    amount: Number(evt.target.elements.amount.value),
  };

  onSubmit(inputDate.delay, inputDate.step, inputDate.amount);
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {

    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

};
function onSubmit(delay, step, amount) {
  for (let i = 1; i <= amount; i += 1, delay += step) {
    createPromise(i, delay).then(onResolve).catch(onReject);
  }
};

function onResolve({ position, delay }) {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
};

function onReject({ position, delay }) {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
};