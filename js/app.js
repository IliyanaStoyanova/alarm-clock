const selectHour = document.getElementById('hour');
const selectMinute = document.getElementById('minute');
const clock = document.querySelector('.clock');
const setAlarmBtn = document.getElementById('setAlarm');
const resetAlarmBtn = document.getElementById('resetAlarm');
const error = document.getElementById('error');
const ringtone = new Audio('./files/best_alarm.mp3');

let selectAlarm = '';
let flAlarm = false;

const appendNum = (i) => {
  return num = i.toString().padStart(2, '0');
}

const currentHour = (currenTime) => {
  return appendNum(currenTime.getHours());
}

const currentMinute = (currenTime) => {
  return appendNum(currenTime.getMinutes());
}

const currentSecond = (currenTime) => {
  return appendNum(currenTime.getSeconds());
}

const setCurrentClock = (currenTime) => {
  return `${currentHour(currenTime)}:${currentMinute(currenTime)}`;
}

const getCurrentTime = () => {
  let currenTime = new Date();
  clock.innerHTML = `${currentHour(currenTime)}:${currentMinute(currenTime)}:${currentSecond(currenTime)}`;
 
  if (flAlarm && selectAlarm === setCurrentClock(currenTime)) {
    ringtone.play();
    ringtone.loop = true;
  }
}

const createOption = (i) => {
  let num = appendNum(i);
  return cOption = `<option value="${num}">${num}</option>`;
}

const intervalTime = setInterval(getCurrentTime, 500);

for(let i=0; i<=24; i++) {
  selectHour.insertAdjacentHTML('beforeend', createOption(i));
}

for(let i=0; i<60; i++) {
  selectMinute.insertAdjacentHTML('beforeend', createOption(i));
}

function addClass(el, clName) {
  el.classList.add(clName);
}

function removeClass(el, clName) {
  el.classList.remove(clName);
}

const isSelectAlarm = () => {
  return selectHour.value !== 'Hour' && selectMinute.value !== 'Minute' ? true : false;
}

const showError = (message) => {
  error.innerText = message;
  removeClass(error, 'hide');
}

const setAlarm = () => {
  if(isSelectAlarm()) {
    addClass(setAlarmBtn, 'disabled');
    removeClass(resetAlarmBtn, 'hide');
    addClass(error, 'hide');
    selectAlarm = `${selectHour.value}:${selectMinute.value}`;
    flAlarm = true;
  } else {
    showError('Please, select a valid time to set Alarm!');
  }
}

const resetAlarm = () => {
  if(flAlarm) {
    removeClass(setAlarmBtn, 'disabled');
    addClass(resetAlarmBtn, 'hide');
    flAlarm = false;
    selectAlarm = '';
    ringtone.pause();
  }
}

setAlarmBtn.addEventListener('click', setAlarm);
resetAlarmBtn.addEventListener('click', resetAlarm);