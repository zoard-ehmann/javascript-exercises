const repeatString = function (string, nrOfTimes) {
  let result = "";
  if (nrOfTimes < 0) {
    result = "ERROR";
  } else {
    for (let i = 0; i < nrOfTimes; i++) result += string;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
