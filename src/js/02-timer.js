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

let calendar = flatpickr(inputEl, options);
// const chosenDate = options.defaultDate;
// console.log(chosenDate);
// let date = flatpickr.onClose;
// console.log(date);

inputEl.addEventListener('click', onSelectedDate);

function onSelectedDate(e) {
    e.preventDefault();
  let clickedDate = flatpickr.onClose;
  let currentDate = options.defaultDate;
  
  // currentDate.getTime();
  // clickedDate.getTime();
  console.log(clickedDate.getTime());
  console.log(currentDate.getTime());
   
    // if (clickedDate - currentDate < 0) {
    //     window.alert("Please choose a date in the future");  
    // }
   
};

