// // // Example Problem

// // // Write a function called same(), which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

// // /*
// // same([1,2,3], [4,1,9]) // true
// // same([1,2,3], [1,9]) // false
// // same([1,2,1], [4,4,1]) // false (must be same frequency)
// // */

// My Solution //

// // // accepts two arrays ✅
// function same(compareArr, squaredArr) {
//   if (!(compareArr.length == squaredArr.length)) return false;
//   const result = {};

//   compareArr.forEach((compare, compareIndex) => {
//     const numToCompare = (compare *= compare);
//     squaredArr.forEach((square, squareIndex) => {
//       if (numToCompare == square) {
//         if (result[compare]) {
//           result[compare]++;
//         } else {
//           result[compare] = 1;
//         }
//       }
//     });
//   });

//   console.log(result);
// }

// console.log(same([1, 2, 3], [4, 1, 9]));
// console.log(same([1, 2, 3], [1, 9]));
// console.log(same([1, 2, 1], [4, 4, 1]));

// const arr = [1, 2, 2, 3, 4, 5, 3, 4, 5];

// const a = Array.from(new Set(arr))

// console.log(arr);
// console.log(a);

// ==================================================================

// Naive (But functional solution) Solution //
// ===============================================================

// Proper Refactored Solution //

// - This is the proper solution because instead of having nested arrays as in the naive (but functional) solution, we have 3 separate loops. Nested loops are O(n^2) in time complexity while separated loops are O(n) which is more efficient.

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

// Two arrays are broken down into objects and then compared with each others keys/values

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // Breaking down arr1 into an object (frequencyCounter1)
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  // Breaking down arr2 into an object (frequencyCounter2)
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }


  // Comparing arr1 object (frequencyCounter1) with arr2 object (frequencyCounter2)
  for (let key in frequencyCounter1) {
  // if the keys don't match then return false
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }

  // if the keys match but the values don't match return false
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

// return true if all checks are passed
  return true;
}

console.log((same([1, 2, 3], [4, 1, 9])));
console.log((same([1, 2, 3], [1, 9])));
console.log((same([1, 2, 1], [4, 4, 1])));


