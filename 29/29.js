const handleFormSubmit = (event) => {
  event.preventDefault(); // Предотвращаем отправку формы по умолчанию

  // Получаем доступ к элементам формы
  const nameInput = document.querySelector("#myFormName");
  const emailInput = document.querySelector("#myFormEmail");

  // Получаем значения полей формы
  const name = nameInput.value;
  const email = emailInput.value;

  // Выполняем желаемые действия с данными
  // Отображаем всплывающее окно
  alert(`Введенное имя: ${name}`);
  alert(`Введенный email: ${email}`);

  // Очищаем поля ввода после обработки данных
  nameInput.value = "";
  emailInput.value = "";
};

// Получаем ссылку на форму
const form = document.querySelector("#myForm");
// Добавляем обработчик события отправки формы
form.addEventListener("submit", handleFormSubmit);
