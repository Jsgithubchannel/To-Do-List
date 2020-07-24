// Input에 활동 작성
//키보드 엔터키 or 엔터 버튼 눌려서
//데이터 스토리지로 이동

const ul = document.querySelector("ul");
const input = document.querySelector("input");
const enterBtn = document.querySelector(".enter");

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
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");
  itemRow.setAttribute("data-id", id);
  itemRow.innerHTML = `${text} <i class="fas fa-trash-alt" data-id=${id}></i>`;
  id++;
  return itemRow;
}

enterBtn.addEventListener("click", () => {
  onAdd();
});

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") onAdd();
});

ul.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});
