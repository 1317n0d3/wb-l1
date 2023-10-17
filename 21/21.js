let i = 0;

const getCallStackSize = () => {
  i++;

  getCallStackSize();
};

try {
  getCallStackSize();
} catch (e) {
  // Выводим размер стека
  alert(i);
}

// chrome: 13952
// opera: 13950
// mozilla: 31542
