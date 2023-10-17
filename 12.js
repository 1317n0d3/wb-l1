const book = {
  title: "Название книги",
  author: "Автор",
  year: 2022,

  // Методы получения значений свойств
  getTitle: function () {
    return this.title;
  },

  getAuthor: function () {
    return this.author;
  },

  getYear: function () {
    return this.year;
  },

  // Методы изменения значений свойств
  setTitle: function (newTitle) {
    this.title = newTitle;
  },

  setAuthor: function (newAuthor) {
    this.author = newAuthor;
  },

  setYear: function (newYear) {
    this.year = newYear;
  },
};

// Получение значений свойств
console.log(book.getTitle()); // Выводит: "Название книги"
console.log(book.getAuthor()); // Выводит: "Автор"
console.log(book.getYear()); // Выводит: 2022

// Изменение значений свойств
book.setTitle("Новое название книги");
book.setAuthor("Новый автор");
book.setYear(2023);

console.log(book.getTitle()); // Выводит: "Новое название книги"
console.log(book.getAuthor()); // Выводит: "Новый автор"
console.log(book.getYear()); // Выводит: 2023
