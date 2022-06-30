const caesar = function (string, shiftFactor) {
  let newString = [];
  for (let letter of string) {
    if (letter.match(/[a-z]/gi)) {
      if (letter.match(/[A-Z]/)) {
        if (letter.charCodeAt(0) + shiftFactor > 90) {
          newString.push(
            String.fromCharCode(letter.charCodeAt(0) - 90 + shiftFactor + 64)
          );
        } else {
          newString.push(
            String.fromCharCode(letter.charCodeAt(0) + shiftFactor)
          );
        }
      } else if (letter.match(/[a-z]/)) {
        if (letter.charCodeAt(0) + shiftFactor > 122) {
          newString.push(
            String.fromCharCode(letter.charCodeAt(0) - 90 + shiftFactor + 64)
          );
        } else {
          newString.push(
            String.fromCharCode(letter.charCodeAt(0) + shiftFactor)
          );
        }
      }
    } else {
      newString.push(letter);
    }
  }
  return newString.join("");
};

console.log(caesar("Hello, World!", 5));

// Do not edit below this line
module.exports = caesar;
