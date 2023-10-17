const outerFunction = () => {
  const outerVariable = "Значение внешней переменной";

  const innerFunction = () => {
    console.log(outerVariable);
  };

  return innerFunction;
};

// Создание экземпляра внутренней функции
const inner = outerFunction();

// Вызов внутренней функции
inner(); // Выводит: "Значение внешней переменной"
