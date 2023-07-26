// Урок 6. Семинар. Знакомство с функциями в JavaScript
// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

function thirdDeg(number) {
  return number * number * number;
}
let result = thirdDeg(2) + thirdDeg(3);
console.log(`2 в кубе + 3 в кубе = ${result}`);

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

let userSalary = parseInt(prompt(`Введите целое число `));
if (isNaN(userSalary)) {
  console.log(`Вы ввели строку, все пропало`);
} else {
  console.log(
    `Размер заработной платы за вычетом налогов равен ${salaryAfterTax(
      userSalary
    )}`
  );
}
function salaryAfterTax(salary) {
  // console.log(salary);
  return salary * 0.87;
}

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

let userNumber1 = parseInt(prompt(`Введите целое число 1 `));
let userNumber2 = parseInt(prompt(`Введите целое число 2 `));
let userNumber3 = parseInt(prompt(`Введите целое число 3 `));

console.log(
  `Максимальное из введенных чисел - ${getMaxNumber(
    userNumber1,
    userNumber2,
    userNumber3
  )}`
);

function getMaxNumber(n1, n2, n3) {
  return Math.max(n1, n1, n3);
}

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль
// (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно,
//  однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются
//   корректные числа, проверки на NaN, Infinity делать не нужно.

let calcAction = Number(
  prompt(
    `Выберите операцию: 1 - сложение, 2 - вычитание, 3 - умножение, 4 - деление`
  )
);
let num1 = Number(prompt(`Введите число 1`));
let num2 = Number(prompt(`Введите число 2`));

switch (calcAction) {
  case 1: {
    console.log(`результат сложения: ${plusCalc(num1, num2)}`);
    break;
  }
  case 2: {
    if (num1 >= num2) {
      console.log(`результат вычитания: ${minusCalc(num1, num2)}`);
    } else {
      console.log(`результат вычитания: ${minusCalc(num2, num1)}`);
    }
    break;
  }
  case 3: {
    console.log(`результат умножения: ${multCalc(num1, num2)}`);
    break;
  }
  case 4: {
    console.log(`результат деления: ${divCalc(num1, num2)}`);
    break;
  }

  default: {
    console.log("Введен некорректный параметр");
    break;
  }
}

function plusCalc(n1, n2) {
  return n1 + n2;
}

function minusCalc(n1, n2) {
  return n1 - n2;
}

function divCalc(n1, n2) {
  return n1 / n2;
}

function multCalc(n1, n2) {
  return n1 * n2;
}
