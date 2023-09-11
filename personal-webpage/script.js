// get date
const currDate = new Date();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// get the day of the week
const dayOfWeek = document.getElementById('today');
dayOfWeek.innerHTML = daysOfWeek[currDate.getUTCDay()];

const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const milisecsEl = document.getElementById("millisecs");


function updateDate () {
  const currTime = document.getElementById('utcTime');
  let hr = new Date().getHours();
  let mins = new Date().getMinutes();
  let secs = new Date().getSeconds();
  let msecs = new Date().getMilliseconds();

  hr = (hr < 10) ? "0" + hr : hr;
  mins = (mins < 10) ? "0" + mins : mins;
  secs = (secs < 10) ? "0" + secs : secs;
  msecs = (secs < 10) ? "0" + msecs : msecs;

  hourEl.innerText = hr;
  minuteEl.innerText = mins;
  secondsEl.innerText = secs;
  milisecsEl.innerText = msecs;

  // updates the time every millisecond
  setTimeout(()=>{
    updateDate()
}, 1);
}
updateDate();