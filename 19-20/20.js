// Функция для вычисления размера локального хранилища
function calculateLocalStorageSize() {
  let totalBytes = 0;
  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      // Увеличиваем счетчик на длину ключа и длину значения, связанного с ключом
      totalBytes += key.length;
      totalBytes += localStorage.getItem(key).length;
    }
  }
  return totalBytes;
}

// Функция для обновления информации о размере локального хранилища
function updateLocalStorage() {
  const localStorageSize = calculateLocalStorageSize();
  const maxLocalStorageSize = 5 * 1024 * 1024; // Максимальный размер хранилища (5 МБ)
  console.log(`${localStorageSize} байт / ${maxLocalStorageSize} байт`);
}

// Вызываем функцию обновления информации о размере локального хранилища
updateLocalStorage();
