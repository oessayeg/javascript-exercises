const add = function(n1, n2) {
  return (n1 + n2);
};

const subtract = function(n1, n2) {
  return (n1 - n2);
};  

const sum = function(array) {
  let returnValue;

  return (array.reduce((returnValue, element) =>
  {
    return (returnValue + element)
  }, 0));
};

const multiply = function(array) {
  
  let result;

  result = array.reduce((result, n) => 
  {
    return (result * n);
  }, 1);
  return (result); 
};

const power = function(a, b) {
  return (Math.pow(a, b));
};

const factorial = function(n) {
  let result = 1;
  let i = 1;

  while (i <= n)
  {
    result *= i;
    i++;
  }
  return result;
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
