const add = function(a,b) {
  return a + b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(numbers=[]) {
	return numbers.reduce((total, num) => total + num, 0)
};

const multiply = function(numbers=[]) {
  return numbers.reduce((total, num) => total * num, 1);
};

const power = function(a,b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
  let fact = 1;
  if (num <= 1) return fact;
  for (let i = num; i > 0; i--) {
    fact = i * fact;  
  }
  return fact;
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


