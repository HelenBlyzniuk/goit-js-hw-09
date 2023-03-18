import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputEl = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');
btnStart.setAttribute('disabled', true);
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
let chosenDate = flatpickr(inputEl, options);
inputEl.addEventListener('click', onSelectedDate);

function onSelectedDate(e) {
    e.preventDefault();
    let clickedDate = flatpickr.onClose;
    
   
    
    const currentDate = new Date();
    
    console.log(clickedDate);
    console.log(clickedDate - currentDate);
    if (clickedDate - currentDate < 0) {
        window.alert("Please choose a date in the future");  
    }
   
};

