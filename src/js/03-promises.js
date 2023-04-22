import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
}

refs.form.addEventListener('submit', onFormSubmit)

function onFormSubmit (evt) {
  evt.preventDefault();
  const inputDate = {
    delay: Number(evt.target.elements.delay.value),
    step: Number(evt.target.elements.step.value),
    amount: Number(evt.target.elements.amount.value),
  };
  runPromise(inputDate.delay, inputDate.step, inputDate.amount);
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout (() => {
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position,delay});
      }
    },delay);   
  });
  
}
function runPromise(delay, step, amount) {
  for (let i = 1, innerDelay = delay; i <= amount; i += 1, innerDelay += step) {
    createPromise(i, innerDelay).then(onResolve).catch(onReject);
  }
}

function onResolve ({position, delay}) {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  console.log(position);
};

function onReject ({position, delay}) {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
};