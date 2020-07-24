// Input에 활동 작성
//키보드 엔터키 or 엔터 버튼 눌려서
//데이터 스토리지로 이동

const ul = document.querySelector("ul");
const input = document.querySelector("input");
const enterBtn = document.querySelector(".enter");

function onAdd() {
  const text = input.value;
  if (text === "") input.focus();
  const item = createItem(text);
  ul.appendChild(item);
  input.value = "";
  input.focus();
}

function createItem(text) {
  const li = document.createElement("li");
  li.innerHTML = text;
  return li;
}

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") onAdd();
});

enterBtn.addEventListener("click", (event) => {
  onAdd();
});
