const clock = document.querySelector(".clock");

function getTime() {
  const date = new Date();
  const min = date.getMinutes();
  const hours = date.getHours();
  clock.innerText = `${hours < 10 ? `0${hours}` : hours} : ${
    min < 10 ? `0${min}` : min
  }`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
