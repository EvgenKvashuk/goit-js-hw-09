import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
}

refs.form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();

  delay = Number(e.currentTarget.delay.value);
  step = Number(e.currentTarget.step.value);
  amount = Number(e.currentTarget.amount.value);

  if (delay >= 0 && step >= 0 && amount > 0) {
    for (let position = 1; position <= amount; position += 1) {
      delay += step;
      createPromise(position, delay)
        .then(({ position, delay }) => {
          setTimeout(() => {
            Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
              useIcon: false,
            });
          }, delay);
        })
        .catch(({ position, delay }) => {
          setTimeout(() => {
            Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
              useIcon: false,
            });
          }, delay);
        });
    }
  } else {
    Notify.warning('Put value > 0');
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const objectPromise = { position, delay };

  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve(objectPromise);
    }
    reject(objectPromise);
  });
}