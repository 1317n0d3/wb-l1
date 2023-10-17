const createAndStyleElement = () => {
  // Создаем новый элемент
  const element = document.createElement("div");

  // Устанавливаем стили с помощью свойства style
  element.style.width = "200px";
  element.style.height = "100px";
  element.style.backgroundColor = "red";

  // Добавляем элемент в DOM
  document.body.appendChild(element);
};

createAndStyleElement();
