const getPosts = (count, offset) => {
  // Получаем закэшированные данные
  const cachedData = getCachedData();

  if (cachedData.length >= count + offset) {
    // Если у нас есть достаточное количество закэшированных данных,
    // выбираем посты из кэша согласно переданным параметрам
    const posts = cachedData.slice(offset, offset + count);
    // Отображаем посты на странице (предполагается, что функция renderPosts уже реализована)
    renderPosts(posts);
  } else {
    // Если закэшированных данных недостаточно, обращаемся к API VK
    getPostsFromVK(count, offset);
  }
};
