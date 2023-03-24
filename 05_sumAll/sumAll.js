const validNumber = (num) => {
  return typeof num === "number" && num >= 0 ? true : false;
};

const sumAll = function (x, y) {
  if (!validNumber(x) || !validNumber(y) || x === y) return "ERROR";

  let start, end;
  if (x < y) {
    start = x;
    end = y;
  } else {
    start = y;
    end = x;
  }

  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
