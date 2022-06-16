const palindromes = function (string) {
  const regex = /[a-z]/gi; // Letters, case insensitive and whole string
  let correctedString = string
    .match(regex)
    .join()
    .replaceAll(",", "")
    .toLowerCase();
  let reversedString = "";
  for (let i = correctedString.length - 1; i >= 0; i--) {
    reversedString += correctedString[i];
  }
  if (reversedString === correctedString) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
