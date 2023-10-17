// Функция принимает число, возвращает boolean значение
const isStrangeNumber = (number) => {
  // Инициализируем переменную, которая будет накапливать сумму делителей числа
  let dividerSum = 0;
  // Проходим циклом for по всем числам с 1 до значения числа, ищем делители
  for (let i = 1; i < number; i++) {
    // Если число number делится на i без остатка, то i является делителем числа number
    if (Number.isInteger(number / i)) {
      // Складываем значение делителя в переменную dividerSum
      dividerSum += i;
    }
  }

  // Когда сумма делителей подсчитана, сравниваем ее с числом number,
  // если значения одинаковые, то число является странным, возвращаем true.
  return dividerSum === number;
};

// странное число (делители: 1, 2, 3)
console.log(isStrangeNumber(6)); // true

// обычное число (делители: 1, 2, 5)
console.log(isStrangeNumber(10)); // false

// странное число (делители: 1, 2, 4, 7, 14)
console.log(isStrangeNumber(28)); // true
