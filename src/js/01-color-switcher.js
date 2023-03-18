
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
console.log(btnStop);
const body = document.querySelector('body');
console.log(body);
console.log(btnStart);
btnStart.style.width = '150px';
btnStart.style.height = '60px';
btnStart.style.marginRight = '50px';
btnStart.style.marginLeft = '300px';
btnStart.style.border = 'none';
btnStart.style.borderRadius = '10%';
btnStop.style.width = '150px';
btnStop.style.height = '60px';
btnStop.style.marginRight = '100px';

btnStop.style.border = 'none';
btnStop.style.borderRadius = '10%';




let intervalId = null;
btnStart.addEventListener('click', onBtnStartClick);
btnStop.addEventListener('click', onBtnStopClick);

function onBtnStartClick(e) {
    btnStart.setAttribute('disabled', true);
    
    if (btnStop.hasAttribute('disabled')) {
        btnStop.removeAttribute('disabled');
    }
    
     intervalId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
        console.log(getRandomHexColor());
    }, 1000);
   
    
}


function onBtnStopClick(e) {
    btnStop.setAttribute('disabled', true);
    clearInterval(intervalId);
    btnStart.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
