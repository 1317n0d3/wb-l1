// Объявляем функцию, которая в качестве параметра принимает строку, возвращает boolean
const isPalindrome = (string) => {
  // Исходную строку приводим к нижнему регистру с помощью метода toLowerCase
  // Также ибавляемся от пробелов с помощью метода split, и соединяем слова в строку
  // с помощью join
  const noSpaceString = string.toLowerCase().split(" ").join("");
  // Получившуюся строку разделяем на символы с помощью split и пустой строки ""
  // Переворачиваем массив символов задом наперед с помощью reverse и объединяем массив
  // символов в строку с помощью join
  const reversedNoSpaceString = noSpaceString.split("").reverse().join("");
  // Проверяем, совпадают ли строки, если да, то исходная строка является палиндромом
  return noSpaceString === reversedNoSpaceString;
};

console.log(isPalindrome("А роза упала на лапу Азора")); // true
