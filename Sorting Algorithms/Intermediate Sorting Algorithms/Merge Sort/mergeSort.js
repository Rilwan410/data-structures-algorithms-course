let { merge } = require("./notes");
/*
mergeSort Pseudocode

    - Break up the array into halves until you have arrays that are empty or have one element

    - Once you have smaller sorted arrays, merge those arrays with other until you are back at the full length of the array

    - Once the array has been merged back together, return the merged (and sorted!) array
*/

// FAILED //
// function mergeSort(arr) {
//   let arrs = [];

//   function helperFunc(input) {
//     if (input.length <= 1) return input;
//     arrs.push(input.slice(Math.Floor(input.length / 2 - 1)));
//   }

//   return mergeSort(arr.slice(Math.floor(arr.length / 2 - 1)));
// }

// Correct Solution
function mergeSortSolution(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSortSolution(arr.slice(0,mid))
  let right = mergeSortSolution(arr.slice(mid))
  return merge(left,right)
}

console.log(mergeSortSolution([10,24,76,73,1,19,8]))