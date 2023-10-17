// Создаем замыкание для защиты от троттлинга и дебоунсинга
function debounce(func, wait) {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Функция для получения данных через GraphHopper API
async function fetchAddressData(address) {
  const url = `https://graphhopper.com/api/1/geocode?key=eb96454e-55fb-420a-9993-8e02d5f524da&q=${encodeURIComponent(
    address
  )}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.hits;
}

// Функция для отображения найденных адресов в выпадающем списке
function showSuggestions(suggestions) {
  const select = document.getElementById("suggestions");

  // Очищаем выпадающий список
  select.innerHTML = "";

  // Создаем опции для каждого найденного адреса
  suggestions.forEach((suggestion) => {
    const option = document.createElement("option");
    option.textContent = `${suggestion.country} ${suggestion.name} ${suggestion.osm_value}`;
    select.appendChild(option);
  });
}

// Функция для обработки ввода адреса
const handleAddressInput = debounce(async function () {
  const input = document.getElementById("address-input");
  const value = input.value;

  if (value.trim() !== "") {
    const suggestions = await fetchAddressData(value);
    showSuggestions(suggestions);
  } else {
    showSuggestions([]);
  }
}, 300);

// Назначаем обработчик на ввод адреса
document
  .getElementById("address-input")
  .addEventListener("input", handleAddressInput);
