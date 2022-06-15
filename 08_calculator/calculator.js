const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  let arraySum = 0;
  for (let num of array) {
    arraySum += num;
  }
  return arraySum;
};

const multiply = function (array) {
  let arrayMultiply = array[0];
  for (let i = 1; i < array.length; i++) {
    arrayMultiply *= array[i];
  }
  return arrayMultiply;
};

const power = function (num, pow) {
  return num ** pow;
};

const factorial = function (num) {
  if (num === 0) return 1;
  for (let i = num - 1; i > 0; i--) {
    num *= i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
