const removeFromArray = function (array) {
  //   let newArray = array.filter((item) => item !== toBeRemoved);
  for (let i = 1; i < arguments.length; i++) {
    array = array.filter((item) => item !== arguments[i]);
  }
  return array;
};
// Do not edit below this line
module.exports = removeFromArray;
