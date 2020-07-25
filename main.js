const ul = document.querySelector("ul");
const input = document.querySelector("input");
const enterBtn = document.querySelector(".enter");
const container = document.querySelector(".container");

const LIST_LS = "lists";

function showMenu(elem) {
  const openMenu = document.querySelector("#show");
  container.setAttribute("id", "show");
  if (openMenu) {
    openMenu.removeAttribute("id");
    //if (openMenu === elem) return;
  }
}

function filterFn(toDo) {
  return toDo.id === 1;
}

let lists = [];

function saveStorage() {
  localStorage.setItem(LIST_LS, JSON.stringify(lists));
}

function deleteStorage(event) {
  const trashBtn = event.target;
  const li = trashBtn.parentNode;
  ul.removeChild(li);
  const cleanStorage = lists.filter((toDo) => {
    return toDo.id !== parseInt(li.id);
  });
  lists = cleanStorage;
  saveStorage();
}

function loadStorage() {
  const loadStorage = localStorage.getItem(LIST_LS);
  if (loadStorage !== null) {
    const parsedList = JSON.parse(loadStorage);
    parsedList.forEach((list) => {
      createItem(list.text);
    });
  }
}

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

function createItem(text) {
  const itemRow = document.createElement("li");
  const newId = lists.length + 1;
  itemRow.setAttribute("class", "item__row");
  itemRow.innerHTML = `${text} <i class="fas fa-trash-alt" data-id=${itemRow.id}></i>`;

  ul.appendChild(itemRow);
  itemRow.id = newId;
  const delBtn = itemRow.querySelector(".fa-trash-alt");
  delBtn.addEventListener("click", deleteStorage);

  const listObj = {
    text: text,
    id: newId,
  };

  lists.push(listObj);
  saveStorage();

  return itemRow;
}

loadStorage();

enterBtn.addEventListener("click", () => {
  onAdd();
});

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") onAdd();
});
