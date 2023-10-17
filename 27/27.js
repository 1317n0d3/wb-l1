const animateElement = () => {
  const element = document.querySelector("#myElement");

  // Добавляем класс анимации
  element.classList.add("animate");

  // Очищаем класс анимации после окончания анимации
  setTimeout(() => {
    element.classList.remove("animate");
  }, 1000);
};

const animateButton = document.querySelector("#animateButton");

animateButton.addEventListener("click", () => {
  animateElement();
});
