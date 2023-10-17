// Функция принимает json строку, возвращает объект - связный список
const jsonToLinkedList = (json) => {
  //  С помощью метода JSON.parse() преобразуем json строку в массив объектов
  const data = JSON.parse(json);
  // Переменная для содержимого самого первого объекта
  let head = null;
  // Переменная, содержащая ссылку на предыдущий элемент связного списка
  let prevNode = null;

  // Проходимся по массиву объектов data и создаем объект для каждого элемента,
  // который содержит свойство value и ссылку на следующий объект
  for (let i = 0; i < data.length; i++) {
    const node = {
      value: data[i].value,
      next: null,
    };

    // Если это не первый элемент в массиве, устанавливаем свойство next предыдущего элемента на текущий элемент.
    // Если это первый элемент, записываем его в head.
    if (prevNode !== null) {
      prevNode.next = node;
    } else {
      head = node;
    }

    prevNode = node;
  }

  // После того, как все элементы созданы, возвращаем head
  return head;
};

const json = '[{"value": 1}, {"value": 2}, {"value": 3}, {"value": 4}]';

console.log(jsonToLinkedList(json)); // { value: 1, next: { value: 2, next: { value: 3, next: { value: 4, next: null } } } }
