const findTheOldest = function (people) {
  let sorted = people.sort((a, b) => {
    a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth ? 1 : -1;
  });
  for (let i = sorted.length - 1; i >= 0; i--) {
    if (sorted[i].hasOwnProperty("yearOfDeath")) return sorted[i];
  }
};
// falta o último teste
// Do not edit below this line
module.exports = findTheOldest;
