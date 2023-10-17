// Функция принимает массив функций, возвращает функцию
const executeFunctions = (functionArray) => {
  // Возвращает результаты выполнения функций массива functionArray
  return () => {
    // Массив с результатами выполнения функций
    const results = [];

    // Проходим по массиву functionArray
    functionArray.forEach((func) => {
      // Записываем результат выполнения функции func в results
      results.push(func());
    });

    // Возвращаем массив с результатами выполнения функций
    return results;
  };
};

const functions = [() => 1, () => 2, () => 3];

const executeFunctionsFunctions = executeFunctions(functions);
const resultsArray = executeFunctionsFunctions();
console.log(resultsArray); // [1, 2, 3]
