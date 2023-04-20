import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),

  delay: document.querySelector('.delay-js'),
  step: document.querySelector('.step-js'),
  amount: document.querySelector('.amount-js'),

  creatBtn: document.querySelector('.creatBtn')
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });




refs.creatBtn.addEventListener('click', (evt) => {

  setTimeout(() => {
    for (let i = 0; i < amount; i++) {
      createPromise(position, delay)
    }
  }, refs.delay)

})