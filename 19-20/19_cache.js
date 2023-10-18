const CACHE_KEY = "vk-widget-cache";
const MAX_CACHE_SIZE = 100;

// Получение кэша из локального хранилища
const getCache = () => {
  const cache = JSON.parse(localStorage.getItem(CACHE_KEY) || "{}");

  // Если размер кэша превышает максимальный допустимый размер,
  // удаляем самую старую запись
  while (Object.keys(cache).length > MAX_CACHE_SIZE) {
    const oldestKey = Object.keys(cache)[0];
    delete cache[oldestKey];
  }

  return cache;
};

// Функция для сохранения данных в кэше браузера
const setCache = (data) => {
  const cache = getCache(); // Получаем текущий кэш из локального хранилища
  const timestamp = Date.now(); // Генерируем метку времени для нового данных в кэше

  // Сохраняем данные в кэше по ключу, равному сгенерированной метке времени
  cache[timestamp] = data;

  // Обновляем данные в локальном хранилище, сериализовав объект кэша в формат JSON
  localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
};

// Получение закэшированных данных
const getCachedData = () => {
  const cache = getCache();

  // Возвращаем значения кэша как одномерный массив
  return Object.values(cache).flat();
};
