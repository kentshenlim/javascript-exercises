const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(array) {
  return array.reduce((runningSum, next) => {
    return runningSum + next;
  }, 0);
};

const multiply = function(array) {
  return array.reduce((cumProd, item) => {
    return cumProd*item;
  }, 1)
};

const power = function(a,b) {
  return a**b;
};

const factorial = function(n) {
  if (n == 1 || n == 0) return 1;
  else if (n < 1) return undefined;
  else return n*factorial(n-1);
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
