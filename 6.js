// Функция принимает массив объектов, возвращает отсортированный массив объектов
const sortObjects = (objects) => {
  // С помощью функции sort вычитаем значения возраста для определения порядка сортировки
  // Если возраст объектов одинаковый, мы используем метод localeCompare() для сравнения строк
  // имени и устанавливаем порядок сортировки по алфавиту
  return objects.sort((a, b) => a.age - b.age || a.name.localeCompare(b.name));
};

console.log(
  sortObjects([
    { name: "John", age: 27 },
    { name: "Bob", age: 25 },
    { name: "Mike", age: 32 },
    { name: "Alex", age: 25 },
  ])
);
