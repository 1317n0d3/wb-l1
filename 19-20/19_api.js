const getPostsFromVK = (count, offset) => {
  // Устанавливаем access token для доступа к API VK
  const ACCESS_TOKEN =
    "5581bd6a5581bd6a5581bd6a36569443a9555815581bd6a30af476731d7372983027cf9";

  // Формируем URL для запроса к API VK с использованием переданных параметров
  const apiUrl = `https://api.vk.com/method/wall.get?owner_id=-1&domain=club1&count=${count}&offset=${offset}&access_token=${ACCESS_TOKEN}&v=5.131&callback=displayPosts`;

  // Создаем элемент <script> и устанавливаем его src на URL запроса к API VK
  const script = document.createElement("script");
  script.src = apiUrl;
  // Добавляем созданный <script> элемент в <body> документа
  document.body.appendChild(script);
};

const displayPosts = (data) => {
  // Получаем список постов из полученных данных
  const posts = data.response.items;

  // Отображаем посты на странице (эта функция должна быть реализована отдельно)
  renderPosts(posts);

  // Сохраняем посты в кэш
  setCache([...posts]);

  // Обновляем данные в локальном хранилище
  updateLocalStorage();
};
