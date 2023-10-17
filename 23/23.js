const passwordStrength = (password) => {
  // Проверяем наличие цифр
  const hasNumbers = /\d/.test(password);
  // Проверяем наличие букв в верхнем и нижнем регистре
  const hasMixedCase = /[a-z]/.test(password) && /[A-Z]/.test(password);
  // Проверяем наличие специальных символов
  const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  // Оцениваем длину пароля
  const lengthScore = password.length < 8 ? 0 : password.length < 12 ? 1 : 2;
  // Оцениваем использование символов
  const characterScore = (hasNumbers + hasMixedCase + hasSymbols) / 3;
  // Вычисляем итоговую оценку
  const score = Math.round((lengthScore + characterScore) * 5);

  // Возвращаем оценку и предложение для улучшения пароля
  if (score >= 8) {
    return "Оценка сложности пароля: Высокая";
  } else if (score >= 5) {
    return "Оценка сложности пароля: Средняя. Рекомендуется использовать более длинный пароль, содержащий различные типы символов.";
  } else {
    return "Оценка сложности пароля: Низкая. Рекомендуется использовать пароль более длинный и содержащий различные типы символов, такие как цифры, буквы в разных регистрах и специальные символы.";
  }
};

const passwordInput = document.querySelector("#passwordInput");

passwordInput.addEventListener("input", () => {
  console.log(passwordStrength(passwordInput.value));
});
