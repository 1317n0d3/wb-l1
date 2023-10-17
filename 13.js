// Базовый класс Shape
class Shape {
  // Конструктор
  constructor() {
    this.name = "Фигура";
  }

  // Метод расчета площади
  getArea() {
    return undefined;
  }

  // Метод расчета периметра
  getPerimeter() {
    return undefined;
  }
}

// Подкласс Rectangle (прямоугольник)
class Rectangle extends Shape {
  // Конструктор
  constructor(width, height) {
    super();
    this.name = "Прямоугольник";
    this.width = width;
    this.height = height;
  }

  // Метод расчета площади
  getArea() {
    return this.width * this.height;
  }

  // Метод расчета периметра
  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

// Подкласс Circle (круг)
class Circle extends Shape {
  // Конструктор
  constructor(radius) {
    super();
    this.name = "Круг";
    this.radius = radius;
  }

  // Метод расчета площади
  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  // Метод расчета периметра
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

// Подкласс Triangle (треугольник)
class Triangle extends Shape {
  // Конструктор
  constructor(a, b, c) {
    super();
    this.name = "Треугольник";
    this.a = a;
    this.b = b;
    this.c = c;
  }

  // Метод расчета площади по формуле Герона
  getArea() {
    const s = (this.a + this.b + this.c) / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }

  // Метод расчета периметра
  getPerimeter() {
    return this.a + this.b + this.c;
  }
}

// Пример использования классов и методов
const rectangle = new Rectangle(5, 10);
console.log(rectangle.name); // Выводит: "Прямоугольник"
console.log(rectangle.getArea()); // Выводит: 50
console.log(rectangle.getPerimeter()); // Выводит: 30

const circle = new Circle(7);
console.log(circle.name); // Выводит: "Круг"
console.log(circle.getArea()); // Выводит: около 153.94
console.log(circle.getPerimeter()); // Выводит: около 43.98

const triangle = new Triangle(3, 4, 5);
console.log(triangle.name); // Выводит: "Треугольник"
console.log(triangle.getArea()); // Выводит: 6
console.log(triangle.getPerimeter()); // Выводит: 12
