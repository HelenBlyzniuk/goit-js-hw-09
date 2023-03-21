
const formEl = document.querySelector('.form');
const btnSubmit = document.querySelector('button[type="submit"]');


function createPromise(position, delay) {

  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
  
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  })
};

// Promise(position, delay).then(result).catch(error);

btnSubmit.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  callPromise();
}

function callPromise({ amount, step }) {
  let position = 0;
  for (i = 0; i <= amount; i++){
    position = i;
    delay += step;
    return createPromise(position, delay);
    
  }
}


let figures = {};

formEl.addEventListener('input', onFormChange);
function onFormChange(e) {
  figures.amount = document.querySelector('input[name="amount"]').value;
  
  figures.delay = document.querySelector('input[name="delay"]').value;
  figures.step = document.querySelector('input[name="step"]').value;
  console.log(figures);
}

console.log(figures);

