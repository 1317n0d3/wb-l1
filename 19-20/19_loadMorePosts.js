// Функция для загрузки дополнительных постов
const loadMorePosts = () => {
  const postList = document.getElementById("post-list");

  const count = 10; // Количество постов, которое нужно загрузить
  const offset = postList.children.length; // Количество уже отображенных постов

  getPosts(count, offset); // Вызов функции getPosts для получения дополнительных постов
};

// throttling функция
const throttle = (callee, timeout) => {
  let timer = null;

  return function perform(...args) {
    if (timer) return; // Если таймер активен, игнорируем вызов

    timer = setTimeout(() => {
      callee(...args);

      clearTimeout(timer); // Очищаем таймер и сбрасываем его
      timer = null;
    }, timeout);
  };
};

const vkWidget = document.getElementById("vk-widget"); // Получаем элемент vk-widget

const checkPosition = () => {
  // Проверяем, находится ли скроллинг в нижней части элемента vk-widget
  if (vkWidget.scrollHeight - vkWidget.scrollTop - vkWidget.clientHeight < 2) {
    loadMorePosts(); // Загружаем дополнительные посты
  }
};

// Добавляем прослушиватель события прокрутки к элементу vkWidget, используя троттлинг функции checkPosition
vkWidget.addEventListener("scroll", throttle(checkPosition, 250));
