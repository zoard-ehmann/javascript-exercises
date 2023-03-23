const removeFromArray = function (array, ...args) {
  const arr = array;

  for (let arg of args) {
    while (arr.indexOf(arg) !== -1) {
      arr.splice(arr.indexOf(arg), 1);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
