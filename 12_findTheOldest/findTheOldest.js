const findTheOldest = function (people) {
  let sorted = people.sort((a, b) => {
    if (a.yearOfDeath === undefined || b.yearOfDeath === undefined) {
      return 2022 - a.yearOfBirth > 2022 - b.yearOfBirth ? 1 : -1;
    } else {
      return a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth
        ? 1
        : -1;
    }
  });
  return sorted[sorted.length - 1];
};
// falta o último teste
// Do not edit below this line
module.exports = findTheOldest;
