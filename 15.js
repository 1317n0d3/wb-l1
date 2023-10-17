async function asyncFunction() {
  try {
    // Выполняем первую асинхронную операцию и ожидаем ее завершения
    const result1 = await asyncOperation1();
    console.log("Результат операции 1:", result1);

    // Выполняем вторую асинхронную операцию и ожидаем ее завершения
    const result2 = await asyncOperation2();
    console.log("Результат операции 2:", result2);

    // Выполняем третью асинхронную операцию и ожидаем ее завершения
    const result3 = await asyncOperation3();
    console.log("Результат операции 3:", result3);

    // Если все операции выполнены успешно, возвращаем сообщение об успешном завершении
    return "Завершено успешно!";
  } catch (error) {
    // Если возникла ошибка в любой из операций, логируем ошибку и выбрасываем ее дальше
    console.error("Произошла ошибка:", error);
    throw error;
  }
}

// Пример асинхронных операций
function asyncOperation1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Результат операции 1"), 1000);
  });
}

function asyncOperation2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Результат операции 2"), 1500);
  });
}

function asyncOperation3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Ошибка операции 3")), 2000);
  });
}

// Пример использования функции
asyncFunction()
  .then((result) => console.log("Результат:", result))
  .catch((error) => console.error("Возникла ошибка:", error));
