const url =
  "http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true";

const tableBody = document.getElementById("tableBody");
const pagination = document.querySelector(".pagination");

let data = [];
let currentPage = 1;

// Функция для загрузки данных с указанного URL
function loadData(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((json) => (data = json));
}

// Функция для отображения данных на странице
function renderData() {
  const itemsPerPage = 50;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  // Очищаем таблицу перед добавлением новых данных
  tableBody.innerHTML = "";

  // Добавляем данные в таблицу
  for (let i = 0; i < currentData.length; i++) {
    const row = tableBody.insertRow(i);

    const firstNameCell = row.insertCell(0);
    firstNameCell.innerHTML = currentData[i].fname;

    const lastNameCell = row.insertCell(1);
    lastNameCell.innerHTML = currentData[i].lname;

    const phoneCell = row.insertCell(2);
    phoneCell.innerHTML = currentData[i].tel;

    const addressCell = row.insertCell(3);
    addressCell.innerHTML = currentData[i].address;

    const cityCell = row.insertCell(4);
    cityCell.innerHTML = currentData[i].city;

    const stateCell = row.insertCell(5);
    stateCell.innerHTML = currentData[i].state;

    const zipCell = row.insertCell(6);
    zipCell.innerHTML = currentData[i].zip;
  }

  // Добавляем элементы для пагинации
  pagination.innerHTML = "";
  const pageCount = Math.ceil(data.length / itemsPerPage);

  for (let i = 1; i <= pageCount; i++) {
    const link = document.createElement("a");
    link.href = "#";
    link.innerText = i;
    if (i === currentPage) {
      link.classList.add("active");
    }
    link.onclick = function () {
      currentPage = i;
      renderData();
      return false;
    };
    pagination.appendChild(link);
  }
}

// Функция для сортировки данных по указанной колонке
function sortTable(columnIndex) {
  let sortOrder = 1;
  if (this.prevColumnIndex === columnIndex) {
    sortOrder = -1;
    this.prevColumnIndex = null;
  } else {
    this.prevColumnIndex = columnIndex;
  }

  data.sort((a, b) => {
    let result = 0;
    if (a[Object.keys(a)[columnIndex]] < b[Object.keys(b)[columnIndex]]) {
      result = -1;
    } else if (
      a[Object.keys(a)[columnIndex]] > b[Object.keys(b)[columnIndex]]
    ) {
      result = 1;
    }
    return result * sortOrder;
  });

  renderData();
}

// Загружаем данные и отображаем их на странице
loadData(url).then(() => renderData());
