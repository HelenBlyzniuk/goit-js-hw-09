
const formEl = document.querySelector('.form');
const delayEl = document.querySelector('input[name="delay"]');
const stepEl = document.querySelector('input[name="step"]');
console.log(stepEl)
const amountEl = document.querySelector('input[name="amount"]');
// console.log(delayEl.value);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve (`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    reject(`❌ Rejected promise ${position} in ${delay}ms`);
  }
}

// function callPromise(amount, step) {
  
//   for (let i = 0, i <= amount, i ++){
//     createPromise(i, delay);
//   }
// }
let delay = null;
let step = null;
let amount = null;

delayEl.addEventListener('input', (e) => {
  e.preventDefault;
  delay = e.currentTarget.value;
  console.log(delay)
  return delay;
});

stepEl.addEventListener('input', (e) => {
  e.preventDefault;
  step = e.currentTarget.value;
  console.log(step);
  return step;
});

amountEl.addEventListener('input', (e) => {
  e.preventDefault;
  amount = e.currentTarget.value;
    console.log(amount);
  return amount;

});



