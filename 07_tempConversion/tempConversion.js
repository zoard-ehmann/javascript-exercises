const roundOneDec = (num) => {
  return Math.round(num * 10) / 10;
};

const convertToCelsius = function (f) {
  return roundOneDec((f - 32) * (5 / 9));
};

const convertToFahrenheit = function (c) {
  return roundOneDec(c * (9 / 5) + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
