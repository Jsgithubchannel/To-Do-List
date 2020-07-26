const form = document.querySelector(".name_form");
const name_input = form.querySelector(".name_input");
const greeting = document.querySelector(".greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(name) {
  localStorage.setItem(USER_LS, name);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = name_input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(name) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${name}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) askForName();
  else paintGreeting(currentUser);
}

function init() {
  loadName();
}

init();
