// Функция принимает число и слово, возвращает строку
const wordEnding = (number, word) => {
  let ending;
  let newWord = word;

  // Если число заканчивается на 1 и не заканчивается на 11, то оставляем ending пустым
  if (number % 10 === 1 && number % 100 !== 11) {
    ending = "";
  } else if (
    // Если число заканчивается на 2, 3 или 4, и при этом не заканчивается на 12, 13 или 14, то ending будет равен "я"
    [2, 3, 4].includes(number % 10) &&
    ![12, 13, 14].includes(number % 100)
  ) {
    ending = "я";
    newWord = word.slice(0, word.length - 1);
  } else {
    // Если слово заканчивается на мягкий знак, то ending равен "ей"
    if (word[word.length - 1] === "ь") {
      ending = "ей";
    } else {
      // В остальных случаях ending будет равен "й"
      ending = "й";
    }

    newWord = word.slice(0, word.length - 1);
  }

  // Возвращаем строку, состоящую из числа, слова и правильного окончания
  return `${number} ${newWord}${ending}`;
};

console.log(wordEnding(122, "сообщение")); // 122 сообщения
console.log(wordEnding(12, "сообщение")); // 12 сообщений
console.log(wordEnding(1, "сообщение")); // 1 сообщение
console.log(wordEnding(1024, "пользователь")); // 1024 пользователя
console.log(wordEnding(1026, "пользователь")); // 1026 пользователей
console.log(wordEnding(121, "пользователь")); // 121 пользователь

// экспортируем функцию с помощью module exports
module.exports = wordEnding;
