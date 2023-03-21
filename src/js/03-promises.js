
const formEl = document.querySelector('.form');
const btnSubmit = document.querySelector('button[type="submit"]');

let figures = {};

formEl.addEventListener('input', onFormInput);
function onFormInput(e) {
  e.preventDefault();
  figures.amount = document.querySelector('input[name="amount"]').value;
  
  figures.delay = document.querySelector('input[name="delay"]').value;
  figures.step = document.querySelector('input[name="step"]').value;
  console.log(figures);
}

console.log(figures);

function createPromise({ position, delay }) {

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

let position = 0;
let delay = figures.delay;


function callPromise(figures) {
  const { amount, step, delay } = figures;
  console.log(amount, step, delay);
  for (i = 0; i <= amount; i++){
    position = i;
    delay += step;
    console.log(position);
   
    
    createPromise({ position, delay })
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
   }
} 


 
btnSubmit.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  callPromise();
}






