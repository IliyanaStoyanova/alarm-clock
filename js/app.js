const selectHour = document.getElementById('hour');
const selectMinute = document.getElementById('minute');
const clock = document.querySelector('.clock');

const appendNum = (i) => {
  return num = i.toString().padStart(2, '0');
}
const getCurrentTime = () => {
  let currenTime = new Date();
  clock.innerHTML = `${appendNum(currenTime.getHours())}:${appendNum(currenTime.getMinutes())}:${appendNum(currenTime.getSeconds())}`;  
}

const createOption = (i) => {
  let num = appendNum(i);
  return cOption = `<option value="${num}">${num}</option>`;
}

const intervalTime = setInterval(getCurrentTime, 500);

for(let i=1; i<=24; i++) {
  selectHour.insertAdjacentHTML('beforeend', createOption(i));
}

for(let i=0; i<60; i++) {
  selectMinute.insertAdjacentHTML('beforeend', createOption(i));
}