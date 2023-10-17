function loadImage(url) {
  return new Promise((resolve, reject) => {
    // Создаем новый экземпляр объекта Image
    const image = new Image();

    // Обработчик успешной загрузки изображения
    image.onload = () => {
      resolve(image); // Резолвим промис с объектом изображения
    };

    // Обработчик ошибки загрузки изображения
    image.onerror = () => {
      reject(new Error(`Could not load image at ${url}`)); // Реджектим промис с ошибкой и сообщением
    };

    // Устанавливаем URL изображения для загрузки
    image.src = url;
  });
}

const imageUrl =
  "https://img.freepik.com/free-photo/a-picture-of-fireworks-with-a-road-in-the-background_1340-43363.jpg";

loadImage(imageUrl)
  .then((image) => {
    console.log("Изображение успешно загружено", image);
  })
  .catch((error) => {
    console.error("Ошибка при загрузке изображения", error);
  });
