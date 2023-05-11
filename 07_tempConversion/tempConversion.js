const convertToCelsius = function(toConvert)
{
  return (Math.round((toConvert - 32) * (5/9) * 10) / 10);
};

const convertToFahrenheit = function(toConvert)
{
  return (Math.round((toConvert * 9 / 5 + 32) * 10) / 10);
};

// console.log(convertToCelsius(100));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
