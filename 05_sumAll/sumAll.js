const sumAll = function (start, end) {
  if (start > end) {
    let aux = start;
    start = end;
    end = aux;
  }
  if (start < 0 || typeof start !== "number" || typeof end !== "number") {
    return "ERROR";
  }
  let result = 0;
  for (let i = start; i <= end; i++) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
