/*
Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false
*/

const isOdd = (val) => val % 2 !== 0;


// My Solution // Passed
function someRecursive(arr, callback) {
  if (arr.length === 0) return false;
  if (callback(arr[0])) return true;

  return someRecursive(arr.slice(1), callback);
}



let arr1 = [1]

let arr2 = [2,3]
console.log(arr1.concat(arr2))