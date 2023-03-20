import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputEl = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');

const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');
btnStart.setAttribute('disabled', true);
const options = {
  
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0])
    clickedDate = selectedDates[0];
    
    if (clickedDate <= new Date) {
      window.alert("Please choose a date in the future");
      clickedDate = null;
    } else {
      clickedDate = selectedDates[0];
      btnStart.removeAttribute('disabled');
    }
  },

  onStart() {
    if (btnStart.hasAttribute('disabled')) {
      return;
    }
    const intervalId = setInterval(() => {
      btnStart.setAttribute('disabled', true);
      const now = new Date;
      const difference = clickedDate - now;
      console.log(difference);
      if (difference <= 0) {
        clearInterval(intervalId);
        return;
      }
      const timeComponents = convertMs(difference);
      seconds.textContent = `${timeComponents.seconds}`;
      minutes.textContent = `${timeComponents.minutes}`;
      hours.textContent = `${timeComponents.hours}`;
      days.textContent = `${timeComponents.days}`;
      console.log(timeComponents);
    }, 1000);
   
  }
};

flatpickr(inputEl, options);
let clickedDate = null;

btnStart.addEventListener('click', () => {
  options.onStart();
})


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

