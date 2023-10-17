const fillLocalStorage = () => {
  const testKey = "test";
  let data = "";

  try {
    // Предварительно очищаем localStorage
    localStorage.removeItem(testKey);

    // Заполняем localStorage до тех пор, пока не будет достигнут предел
    while (true) {
      data += "1"; // Увеличиваем размер каждый раз на символ

      // Пытаемся записать в `localStorage`
      localStorage.setItem(testKey, data);

      console.log(`${data.length} байт`);
    }
  } catch (e) {
    if (e == QUOTA_EXCEEDED_ERR) {
      alert("Локальное хранилище переполнено");
    }

    // Очищаем localStorage от данных
    localStorage.removeItem(testKey);

    // Возвращаем размер localStorage
    return data.length;
  }
};

fillLocalStorage();
