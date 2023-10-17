// Функция принимает массив функций и индекс текущей функции в массиве
const callFunctionsRecursively = (functionArray, index = 0) => {
  // Рекурсия продолжается до тех пор, пока не будут вызваны все функции в массиве
  if (index >= functionArray.length) {
    return;
  }

  // Вызываем текущую функцию по индексу
  functionArray[index]();

  // Вызываем текущую функцию с увеличенным индексом
  callFunctionsRecursively(functionArray, index + 1);
};

const functionArray = [
  () => {
    console.log(1);
  },
  () => {
    console.log(2);
  },
  () => {
    console.log(3);
  },
];

callFunctionsRecursively(functionArray); // 1 2 3
