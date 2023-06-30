// Завдання 1
/**
 * Функція `generateRandomPassword` генерує випадковий пароль заданої довжини.
 *
 * length - довжина пароля.
 *
 * Повертає випадковий пароль.
 */
function generateRandomPassword(length) {
   let password = ''; // Створюємо порожній рядок для збереження паролю.
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // Рядок символів, доступних для паролю.

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length); // Генеруємо випадковий індекс символу зі списку characters.
    const randomCharacter = characters.charAt(randomIndex); // Отримуємо символ з випадковим індексом.
    password += randomCharacter; // Додаємо отриманий випадковий символ до паролю.
  }

  return password; // Повертаємо згенерований випадковий пароль.
}

console.log("Завдання: 1 ==============================");
console.log(generateRandomPassword(8));
// Виведе випадковий пароль довжиною 8 символів.

// Завдання 2
/**
 * Функція `calculateCircleArea` обчислює площу кола на основі його радіуса.
 *
 *  radius - Радіус кола.
 * Поверне: Площу кола.
 */
function calculateCircleArea(radius) {
   if (typeof radius !== 'number') { // Перевірка, чи переданий радіус є числом.
    console.log('Помилка: радіус має бути числом.'); // Якщо радіус не є числом, виводимо повідомлення про помилку.
    return null; // Повертаємо null, щоб показати, що обчислення не можливе.
  }

  const PI = Math.PI; // Збереження значення числа Пі.

  const area = PI * Math.pow(radius, 2); // Обчислення площі кола за формулою PI * r^2, де PI - число Пі, а r - радіус.

  return area; // Повертаємо обчислену площу кола.
}

console.log("Завдання 2 ==============================");
console.log(calculateCircleArea(5));
// Виведе площу кола з радіусом 5, наприклад 78.53981633974483.

// Завдання 3
/**
 * Функція `findMinMax` знаходить мінімальне та максимальне число в масиві.
 *
 *  numbers - Масив чисел.
 * Поверне: Об'єкт, що містить мінімальне та максимальне число.
 */
function findMinMax(numbers) {
   if (!Array.isArray(numbers)) { // Перевірка, чи переданий параметр є масивом.
    console.log('Помилка: вхідний параметр має бути масивом чисел.'); // Якщо переданий параметр не є масивом, виводимо повідомлення про помилку.
    return null; // Повертаємо null, що свідчить про неможливість обробки вхідних даних.
  }

  let min = numbers[0]; // Записуємо перший елемент масиву як початкове мінімальне значення.
  let max = numbers[0]; // Записуємо перший елемент масиву як початкове максимальне значення.

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i]; // Оновлюємо мінімальне значення, якщо знайдено менше число.
    }

    if (numbers[i] > max) {
      max = numbers[i]; // Оновлюємо максимальне значення, якщо знайдено більше число.
    }
  }

  return { min, max }; // Повертаємо об'єкт, що містить знайдені мінімальне та максимальне число.
}
console.log("Завдання 3 ==============================");
console.log(findMinMax([5, 2, 9, 1, 5, 6, 7, 8]));
// Виведе об'єкт, що містить мінімальне (1) та максимальне (9) числа.

// Завдання 4
/**
 * Функція `calculateHypotenuse` обчислює довжину гіпотенузи прямокутного трикутника за довжинами його катетів.
 *
 *  a - Довжина першого катета.
 *  b - Довжина другого катета.
 * Поверне: Довжину гіпотенузи.
 */
function calculateHypotenuse(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') { // Перевірка, чи довжини катетів є числами.
    console.log('Помилка: довжини катетів мають бути числами.'); // Якщо довжини катетів не є числами, виводимо повідомлення про помилку.
    return null; // Повертаємо null, що свідчить про неможливість обробки вхідних даних.
  }

  const hypotenuse = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)); // Обчислюємо довжину гіпотенузи за теоремою Піфагора: c = √(a² + b²)

  return hypotenuse; // Повертаємо обчислену довжину гіпотенузи.
}

console.log("Завдання 4 ==============================");
console.log(calculateHypotenuse(3, 4));
// Виведе довжину гіпотенузи для прямокутного трикутника з катетами довжиною 3 та 4, що дорівнює 5.

// Завдання 5
/**
 * Функція `roundObjectValues` заокруглює значення всіх числових властивостей об'єкта.
 *
 *  obj - Об'єкт для обробки.
 *  Поверне: Об'єкт з заокругленими значеннями числових властивостей.
 */
function roundObjectValues(obj) {
  if (typeof obj !== 'object' || obj === null) { // Перевірка, чи аргумент є об'єктом і не є null.
    console.log('Помилка: аргумент має бути об\'єктом.'); // Якщо аргумент не є об'єктом або є null, виводимо повідомлення про помилку.
    return null; // Повертаємо null, що свідчить про неможливість обробки вхідних даних.
  }

  const entries = Object.entries(obj); // Отримуємо масив пар [ключ, значення] з об'єкта.

  const roundedEntries = entries.map(([key, value]) => {
    if (typeof value === 'number') { // Перевіряємо, чи значення є числом.
      return [key, Math.round(value)]; // Якщо значення є числом, округлюємо його до найближчого цілого та повертаємо нову пару [ключ, значення].
    }
    return [key, value]; // Якщо значення не є числом, повертаємо оригінальну пару [ключ, значення].
  });

  const roundedObj = Object.fromEntries(roundedEntries); // Конвертуємо масив пар [ключ, значення] назад в об'єкт за допомогою Object.fromEntries().

  return roundedObj; // Повертаємо новий об'єкт з заокругленими значеннями числових властивостей.
}
// Ця функція приймає об'єкт obj і заокруглює значення всіх числових властивостей в цьому об'єкті. Спочатку вона перевіряє, чи аргумент є об'єктом і не є null. Якщо аргумент не є об'єктом або є null, вона виводить повідомлення про помилку в консоль і повертає null, щоб показати, що обробка вхідних даних неможлива.

// Якщо аргумент є об'єктом, функція отримує масив пар [ключ, значення] з об'єкта за допомогою Object.entries(obj). Потім вона перебирає цей масив за допомого


console.log("Завдання 5 ==============================");
const myObject = {
  a: 3.5,
  b: 2.2,
  c: "not a number",
  d: 4.9,
};
console.log(roundObjectValues(myObject));
// Виведе:
// { a: 4, b: 2, c: "not a number", d: 5 }

// Завдання 6
/**
 * Функція `calculateVolumeCylinder` обчислює об'єм циліндра за заданими радіусом і висотою.
 *
 *  radius - радіус основи циліндра.
 *  height - висота циліндра.
 * Поверне: Об'єм циліндра.
 */
function calculateVolumeCylinder(radius, height) {
    if (typeof radius !== 'number' || typeof height !== 'number') { // Перевіряємо, чи радіус і висота є числами.
    console.log('Помилка: радіус і висота мають бути числами.'); // Якщо хоча б один з аргументів не є числом, виводимо повідомлення про помилку в консоль.
    return null; // Повертаємо null, що свідчить про неможливість обробки вхідних даних.
  }

  const volume = Math.PI * radius ** 2 * height; // Обчислюємо об'єм циліндра за формулою V = PI * r^2 * h, де PI - число Пі, r - радіус, h - висота.
  const roundedVolume = Math.ceil(volume); // Округляємо об'єм до цілого числа, що більше.
  return roundedVolume; // Повертаємо обчислений об'єм.
}

console.log("Завдання 6 ==============================");
console.log(calculateVolumeCylinder(3, 5));
// Виведе 142

// Завдання 7
/**
 * Функція `sumPositiveNumbers` обчислює суму додатніх чисел у масиві.
 *
 * numbers - масив чисел.
 * Поверне: Сума додатніх чисел.
 */
function sumPositiveNumbers(numbers) {
   if (!Array.isArray(numbers)) {
    console.log('Помилка: аргумент має бути масивом чисел.');
    return null;
  }

  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (Math.sign(numbers[i]) === 1) {
      sum += numbers[i];
    }
  }

  return sum;// Перевіряємо, чи є numbers масивом. Якщо numbers не є масивом, виводимо повідомлення "Помилка: аргумент має бути масивом чисел".
  // Повертаємо null, що свідчить про неможливість обробки вхідних даних.
  // Ініціалізуємо змінну для збереження суми додатніх чисел.
  // Проходимо по всіх числах у масиві за допомогою циклу for.
  // Перевіряємо, чи є поточне число додатним, використовуючи Math.sign.
  // Якщо число додатнє, додаємо його до суми.
  // Повертаємо суму додатніх чисел.
}

console.log("Завдання 7 ==============================");
console.log(sumPositiveNumbers([-5, 3, 2, -1, 7, -6]));
// Виведе 12

// Завдання 8
/**
 * Функція `getFractionalPart` виводить дробову частину числа.
 * num - число.
 * Поверне: дробова частина числа.
 */
function getFractionalPart(num) {
  if (typeof num !== 'number') {
    console.log('Помилка: вхідний аргумент має бути числом.');
    return null;
  }

  const roundedNum = Math.floor(num);
  const fractionalPart = num - roundedNum;
  const roundedFractionalPart = parseFloat(fractionalPart.toFixed(6));

  return roundedFractionalPart;
}
  // Перевіряємо, чи є num числом. Якщо num не є числом, виводимо повідомлення "Помилка: вхідний аргумент має бути числом.".
  // Повертаємо null, що свідчить про неможливість обробки вхідних даних.
  // Округляємо відкидуючи дробову частину.
  // Віднімаємо цілу частину від початкового числа, щоб отримати дробову частину.
  // Округлюємо дробову частину з формату double до float.
  // Повертаємо дробову частину числа.


console.log("Завдання 8 ==============================");
console.log(getFractionalPart(12.34567));
// Виведе дробову частину числа, наприклад 0.34567001461982727

// Завдання 9
/**
 * Функція `compareAndRound` порівнює два числа та повертає найбільше число округлене до найближчого цілого.
 *
 *  num1 - Перше число.
 *  num2 - Друге число.
 *  Поверне: Найбільше число округлене до найближчого цілого.
 */
function compareAndRound(num1, num2) {
   if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    console.log('Помилка: обидва аргументи мають бути числами.');
    return null;
  }

  const maxNumber = Math.max(num1, num2);
  const roundedMaxNumber = Math.round(maxNumber);

  return roundedMaxNumber;
  // Перевірка, чи обидва аргументи є числами. Якщо хоча б один аргумент не є числом, виводимо повідомлення "Помилка: обидва аргументи мають бути числами.".
  // Повертаємо null, що свідчить про неможливість обробки вхідних даних.
  // Визначаємо найбільше число.
  // Округляємо найбільше число до найближчого цілого.
  // Повертаємо округлене число.
}

console.log("Завдання 9 ==============================");
console.log(compareAndRound(13.4, 15.7));
// Виведе 16.

// Завдання 10
/**
 * Функція `estimateInvestment` оцінює прибуток від інвестицій з фіксованою річною процентною ставкою за задану кількість років.
 *
 *  principal - Початкова сума інвестицій.
 *  interestRate - Річна процентна ставка в десяткових дробах (наприклад, 5% = 0.05).
 *  years - Кількість років.
 *  Поверне: Оцінку суми прибутку від інвестицій.
 */
function estimateInvestment(principal, interestRate, years) {
   if (typeof principal !== 'number' || typeof interestRate !== 'number' || typeof years !== 'number') {
    console.log('Помилка: усі аргументи мають бути числами.');
    return null;
  }

  const estimatedAmount = principal * Math.pow(1 + interestRate, years);
  const roundedEstimatedAmount = Math.round(estimatedAmount);

  return roundedEstimatedAmount;
  // Перевірка, чи усі аргументи є числами. Якщо хоча б один аргумент не є числом, виводимо повідомлення про помилку в консоль.
  // Повертаємо null, що свідчить про неможливість обробки вхідних даних.
  // Розраховуємо суму інвестицій за формулою P*(1+rate)^years, де P - початкова сума інвестицій, rate - річна процентна ставка, years - кількість років.
  // Округляємо ії до найближчого цілого
  // Повертаємо розраховану суму інвестицій.
}

console.log("Завдання 10 ==============================");
console.log(estimateInvestment(1000, 0.05, 5));
// Виведе  1276.

// Завдання 11
/**
 * Функція `isTotalPriceExceedsMaxPrice` приймає масив з об'єктами {price, title} та maxPrice.
 * Кожен об'єкт містить властивість price як дробове число.
 * Функція обраховує суму всіх price (totalPrice), конвертує totalPrice та maxPrice за допомогою Math.fround
 * і перевіряє чи не перевищує totalPrice maxPrice.
 *
 * products - масив з об'єктами {price, title}.
 * maxPrice - максимальна сума.
 * Повертає чи перевищує totalPrice maxPrice.
 */
function isTotalPriceExceedsMaxPrice(products, maxPrice) {
    if (!Array.isArray(products)) {
    console.log('Помилка: аргумент products має бути масивом.');
    return null;
  }

  if (typeof maxPrice !== 'number') {
    console.log('Помилка: аргумент maxPrice має бути числом.');
    return null;
  }

  const totalPrice = products.reduce((accumulator, product) => accumulator + product.price, 0);
  const convertedTotalPrice = Math.fround(totalPrice);
  const convertedMaxPrice = Math.fround(maxPrice);

  return convertedTotalPrice > convertedMaxPrice;
  // Перевіряємо, чи аргумент products є масивом.
  // Якщо products не є масивом, виводимо повідомлення про помилку.
  // Повертаємо null, що свідчить про неможливість обробки вхідних даних.
  // Перевіряємо, чи аргумент maxPrice є числом.
  // Якщо maxPrice не є числом, виводимо повідомлення про помилку.
  // Повертаємо null, що свідчить про неможливість обробки вхідних даних.
  // Використовуємо метод reduce() для обчислення загальної ціни.
  // Додаємо ціну продукту до аккумулятора.
  // Конвертуємо totalPrice та maxPrice за допомогою Math.fround.
  // Порівнюємо, чи не перевищує totalPrice maxPrice.
}

console.log("Завдання 11 ==============================");
let products = [
  { title: "Product 1", price: 0.4 },
  { title: "Product 2", price: 0.23 },
  { title: "Product 3", price: 0.109 },
  { title: "Product 4", price: 0.7564 },
  { title: "Product 5", price: 0.33456 },
  { title: "Product 6", price: 0.897654 },
];
let maxPrice = 3.567894;
console.log(isTotalPriceExceedsMaxPrice(products, maxPrice));
// Виведе: false
