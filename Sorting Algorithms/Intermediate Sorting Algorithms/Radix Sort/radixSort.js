/*
Radix Sort Pseudocode
    - Define a function that accepts list of numbers
    - Figure out how many digits the largest number has 
    - Loop from k = 0 up to this largest number of digits
    - For each iteration of the loop: 
        - create buckets for each digit (0 to 9)
        - place each number in the corresponding bucket based on its kth digit
        - Replace our existing array with values in our buckets starting with 0 and going up to 9
        - Return the list in the end!
*/
let {
  mostDigits,
  getDigitSolution,
  digitCount,
} = require("./Radix Sort Helpers/radixSortHelper");

// My Solution // Failed //
// function radixSort(numArr) {
//   let most = mostDigits(numArr);
//   for (let j = 0; j < numArr.length; j++) {
//     for (let k = 0; k < most; k++) {
//       let buckets = Array.from({ length: 9 }).fill([]);
//       buckets[getDigitSolution(numArr[j], k)].push(numArr[j]);
//       console.log(buckets);
//     }
//   }
//   console.log(most);
// }

// Correct Solution //
function radixSort(numArr) {
  let mostDigitCount = mostDigits(numArr);

  for (let k = 0; k < mostDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < numArr.length; i++) {
      digitBuckets[getDigitSolution(numArr[i], k)].push(numArr[i]);
    }
    numArr = [].concat(...digitBuckets);
  }
  return numArr;
}

console.log(radixSort([1, 48, 8593, 10004, 90, 283, 220, 11, 8]));
