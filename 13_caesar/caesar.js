const caesar = function (string, shiftFactor) {
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
  let newString = "";
  for (let letter of string) {
    if (letter.match(/[a-z]/gi)) { // is it letter?
      if (letter.match(/[A-Z]/)) { // is it uppercase?
        if (upperAlphabet.indexOf(letter) + shiftFactor > 26) {
          newString += upperAlphabet[upperAlphabet.indexOf(letter) + (shiftFactor % 26)]
        }
        newString += upperAlphabet[upperAlphabet.indexOf(letter) + shiftFactor]
      } else if (letter.match(/[a-z]/)) { // is it lowercase?
        if (lowerAlphabet.indexOf(letter) + shiftFactor > 26) {
          newString += upperAlphabet[upperAlphabet.indexOf(letter) + (shiftFactor % 26)]
        }
        newString += lowerAlphabet[lowerAlphabet.indexOf(letter) + shiftFactor]
      }
    } else {
      newString += letter
    }
  }
  return newString
};

console.log(caesar("zzz", 1));

// Do not edit below this line
module.exports = caesar;
