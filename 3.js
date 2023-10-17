// Создаем модуль MathX, который содержит несколько функций для работы с числами
const MathX = (function () {
  // Функция для вычисления числа Фибоначчи до указанного индекса n
  function fibonacci(n) {
    if (n <= 0) return null; // Возвращаем null, если индекс меньше или равен 0
    if (n === 1 || n === 2) return 1; // Возвращаем 1, если индекс равен 1 или 2
    let a = 1;
    let b = 1;
    let result;
    for (let i = 3; i <= n; i++) {
      result = a + b; // Вычисляем следующее число Фибоначчи как сумму двух предыдущих
      a = b; // Перемещаем a на место b
      b = result; // Перемещаем b на место результата
    }
    return result; // Возвращаем последнее вычисленное число
  }

  // Функция для получения ряда чисел Фибоначчи до указанного индекса n
  function fibonacciSeries(n) {
    if (n <= 0) return []; // Возвращаем пустой массив, если индекс меньше или равен 0
    if (n === 1) return [1]; // Возвращаем массив с одним элементом 1, если индекс равен 1
    let series = [1, 1]; // Создаем массив с первыми двумя числами Фибоначчи
    let a = 1;
    let b = 1;
    let result;
    for (let i = 3; i <= n; i++) {
      result = a + b; // Вычисляем следующее число Фибоначчи как сумму двух предыдущих
      a = b; // Перемещаем a на место b
      b = result; // Перемещаем b на место результата
      series.push(result); // Добавляем вычисленное число в ряд
    }
    return series; // Возвращаем ряд чисел Фибоначчи
  }

  // Функция для проверки, является ли заданное число простым
  function isPrimeNumber(num) {
    if (num <= 1) return false; // Возвращаем false, если число меньше или равно 1
    if (num === 2) return true; // Возвращаем true, если число равно 2
    if (num % 2 === 0) return false; // Возвращаем false, если число четное
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false; // Если число делится без остатка на другое число, то оно не простое
    }
    return true; // Если число не делится на другие числа без остатка, то оно простое
  }

  // Функция для получения простого числа по порядковому номеру n
  function primeNumber(n) {
    if (n <= 0) return null; // Возвращаем null, если порядковый номер меньше или равен 0
    let count = 0;
    let num = 2;
    while (count < n) {
      if (isPrimeNumber(num)) {
        count++;
        if (count === n) return num; // Возвращаем число, если оно является n-м простым числом
      }
      num++;
    }
    return null; // Если не удалось найти n-е простое число, возвращаем null
  }

  // Функция для получения ряда простых чисел до указанного порядкового номера n
  function primeNumberSeries(n) {
    if (n <= 0) return []; // Возвращаем пустой массив, если порядковый номер меньше или равен 0
    const series = []; // Создаем пустой массив для ряда простых чисел
    let count = 0;
    let num = 2;
    while (count < n) {
      if (isPrimeNumber(num)) {
        series.push(num); // Добавляем простое число в ряд
        count++;
      }
      num++;
    }
    return series; // Возвращаем ряд простых чисел
  }

  // Возвращаем публичные методы модуля
  return {
    fibonacci: fibonacci,
    fibonacciSeries: fibonacciSeries,
    primeNumber: primeNumber,
    primeNumberSeries: primeNumberSeries,
  };
})();

// Пример использования MathX
console.log(MathX.fibonacci(5)); // Выводит 5
console.log(MathX.fibonacciSeries(10)); // Выводит [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
console.log(MathX.primeNumber(5)); // Выводит 11
console.log(MathX.primeNumberSeries(10)); // Выводит [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
