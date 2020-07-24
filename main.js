// Input에 활동 작성
//키보드 엔터키 or 엔터 버튼 눌려서
//데이터 스토리지로 이동

const ul = document.querySelector("ul");
const input = document.querySelector("input");
const enterBtn = document.querySelector(".enter");

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") onAdd();
});

enterBtn.addEventListener("click", (event) => {
  onAdd();
});

function onAdd() {
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }
  const item = createItem(text);
  ul.appendChild(item);
  input.value = "";
  input.focus();
}

let id = 0;
function createItem(text) {
  const li = document.createElement("li");
  li.innerHTML = `${text} <i class="fas fa-trash-alt" data-id=${id}></i>`;
  id++;
  return li;
}

ul.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  const li = document.querySelectorAll("li");
  if (li[id]) li[id].remove();
});
