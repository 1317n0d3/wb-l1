const addNewElement = () => {
  // Получаем ссылку на шаблон элемента
  const template = document.querySelector("#myTemplate");

  // Клонируем содержимое шаблона и добавляем его в DOM
  const clone = document.importNode(template.content, true);
  document.querySelector("#myList").appendChild(clone);
};

const addNewTemplateElementButton = document.querySelector(
  "#addNewTemplateElement"
);

addNewTemplateElementButton.addEventListener("click", (event) => {
  addNewElement();
});
