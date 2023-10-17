const convertStringToJson = (str) => {
  let json;

  try {
    // Удаляем возможные пробелы в начале и конце строки
    str = str.trim();

    // Проверяем, что строка начинается с открывающей фигурной скобки и заканчивается закрывающей фигурной скобкой
    if (str[0] !== "{" || str[str.length - 1] !== "}") {
      throw new Error("Некорректный формат JSON");
    }

    // Удаляем открывающую и закрывающую фигурные скобки
    str = str.slice(1, -1);

    // Разделяем строку по запятой для получения пар "ключ: значение"
    const pairs = str.split(",");

    json = {};

    // Обрабатываем каждую пару "ключ: значение"
    for (let pair of pairs) {
      // Разделяем пару на ключ и значение
      const [key, value] = pair.split(":");

      // Удаляем возможные пробелы в начале и конце ключа и значения
      const parsedKey = key.trim();
      const parsedValue = value.trim();

      // Проверяем, является ли ключ строкой и обрезаем возможные кавычки
      if (!parsedKey.startsWith('"') || !parsedKey.endsWith('"')) {
        throw new Error("Некорректный формат ключа");
      }
      const parsedKeyWithoutQuotes = parsedKey.slice(1, -1);

      // Обрабатываем значения, основываясь на их типе
      let parsedJsonValue;

      if (parsedValue === "null") {
        parsedJsonValue = null;
      } else if (parsedValue === "true") {
        parsedJsonValue = true;
      } else if (parsedValue === "false") {
        parsedJsonValue = false;
      } else if (!isNaN(parsedValue)) {
        parsedJsonValue = Number(parsedValue);
      } else if (
        (parsedValue.startsWith('"') && parsedValue.endsWith('"')) ||
        (parsedValue.startsWith("'") && parsedValue.endsWith("'"))
      ) {
        // Проверяем, является ли значение строкой и обрезаем возможные кавычки
        parsedJsonValue = parsedValue.slice(1, -1);
      } else {
        // Если значение не соответствует ни одному из примитивных типов, оставляем его "как есть"
        parsedJsonValue = parsedValue;
      }

      // Добавляем пару "ключ: значение" в объект JSON
      json[parsedKeyWithoutQuotes] = parsedJsonValue;
    }
  } catch (error) {
    // Если произошла ошибка в процессе преобразования
    console.error("Ошибка при конвертации строки в JSON:", error);

    // Возвращаем null или другое значение по умолчанию, в зависимости от требований
    return null;
  }

  // Возвращаем объект JSON
  return json;
};

// Пример использования функции
const jsonString = '{"name": "John", "age": 30}';
const jsonObject = convertStringToJson(jsonString);
console.log(jsonObject); // Выводит: { name: 'John', age: 30 }
