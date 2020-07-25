// Input에 활동 작성
//키보드 엔터키 or 엔터 버튼 눌려서
//데이터 스토리지로 이동

const ul = document.querySelector("ul");
const input = document.querySelector("input");
const enterBtn = document.querySelector(".enter");

const LIST_LS = "lists";

let lists = [];

function onAdd() {
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }
  createItem(text);
  input.value = "";
  input.focus();
}

function saveStorage() {
  localStorage.setItem(LIST_LS, JSON.stringify(lists));
}

let id = 0;
function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");
  itemRow.setAttribute("data-id", id);
  itemRow.innerHTML = `${text} <i class="fas fa-trash-alt" data-id=${id}></i>`;
  id++;
  ul.appendChild(itemRow);

  const listObj = {
    text: text,
    id: id,
  };
  lists.push(listObj);
  saveStorage();
  return itemRow;
}

function loadList() {
  const loadList = localStorage.getItem(LIST_LS);
  if (loadList !== null) {
    const parsedList = JSON.parse(loadList);
    parsedList.forEach((list) => {
      createItem(list.text);
    });
  }
}

loadList();

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
