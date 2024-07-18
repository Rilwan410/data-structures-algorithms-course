/*
- In order to implement radix sort, it's helpful to build a few helper functions first:

    getDigit(num, place) - returns the digit in num at the given place value
*/

// My Solution // FAILED //
function getDigit(num, position) {
  num = num.toString().split("");
  position = position.toString();
  //   if(num.indexOf(position) === 0) return (num.indexOf(position) - (num.length - 1))
  if (position > num.length - 1) return -1;
  if (Math.abs(num.indexOf(position) - (num.length - 1)) > num.length - 1)
    return Number(num[num.length - 1]);
  return Math.abs(num.indexOf(position) - (num.length - 1));
}

// Correct Solution //
function getDigitSolution(num, position) {
  return Math.floor((Math.abs(num) / Math.pow(10, position)) % 10);
}

// ======================================================================

// My solution // Passed
function digitCount(num) {
  return num.toString().split("").length;
}

// My solution //passed//
function mostDigits(arr) {
  let tempMax = arr[0];
  arr.forEach((num) => {
    if (digitCount(num) > digitCount(tempMax)) tempMax = num;
  });
  return tempMax.toString().split("").length;
}

module.exports = {
  digitCount,
  getDigitSolution,
  mostDigits,
};
