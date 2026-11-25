const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((total, newNum) => {
    return total + newNum;
  }, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, newNum) => {
    return total * newNum;
  }, 1)
};

const power = function(base, exponent) {
  return base ** exponent;
};

const factorial = function(num) {
  let sum = 1;
  for (let i = num; i > 1; i--) {
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
