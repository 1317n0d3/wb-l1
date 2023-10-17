const traverseDOM = (node) => {
  console.log(node);

  // Рекурсивный вызов для всех дочерних элементов
  for (let i = 0; i < node.childNodes.length; i++) {
    const child = node.childNodes[i];
    if (child.nodeType === Node.ELEMENT_NODE) {
      traverseDOM(child);
    }
  }
};

const myDiv = document.querySelector("#myDiv");
traverseDOM(myDiv); // Обход дерева начинается с элемента myDiv
