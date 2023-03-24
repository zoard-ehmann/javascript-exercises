const leapYears = function (year) {
  let isLeap = false;
  if (year % 4 === 0) {
    isLeap = true;
    if (year % 100 === 0) {
      isLeap = year % 400 === 0 ? true : false;
    }
  }
  return isLeap;
};

// Do not edit below this line
module.exports = leapYears;
