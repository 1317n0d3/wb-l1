const jsonStringify = (obj) => {
  // Если объект является строкой, возвращаем строку в кавычках
  if (typeof obj === "string") {
    return `"${obj}"`;
  }

  // Если объект является числом, булевым значением или null, преобразуем его в строку
  if (typeof obj === "number" || typeof obj === "boolean" || obj === null) {
    return String(obj);
  }

  // Если объект является массивом, преобразуем каждый элемент массива, рекурсивно вызывая jsonStringify
  if (Array.isArray(obj)) {
    const arrayValues = obj.map((item) => jsonStringify(item));
    return `[${arrayValues.join(",")}]`;
  }

  // Если объект является обычным объектом, рекурсивно вызываем jsonStringify для каждого свойства
  if (typeof obj === "object") {
    const objectProperties = [];

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = jsonStringify(obj[key]);
        objectProperties.push(`"${key}":${value}`);
      }
    }

    return `{${objectProperties.join(",")}}`;
  }

  // Если объект не подходит ни к одному условию, то ничего не возвращаем
  return;
};

// Пример использования
const obj = {
  name: "Boris",
  age: 36,
  hobbies: ["reading", "sport"],
  address: {
    city: "Moscow",
    street: "12 street",
  },
};

const jsonString = jsonStringify(obj);
console.log(jsonString);
