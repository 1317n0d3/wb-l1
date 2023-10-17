// Импортируем библиотеку Moment.js
const moment = require("moment");

// Определяем функцию для работы с датами
function formatDate(date) {
  return moment(date).format("YYYY-MM-DD");
}

// Пример использования
console.log(formatDate(new Date()));

// Экспортируем функцию из модуля
module.exports = {
  formatDate,
};
