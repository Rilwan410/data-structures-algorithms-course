/*
- create an empty array, take a look at the smallest values in each array
- While there are still values we haven't looked at...

    -If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array

    - If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array

    - Once we exhaust one array, push in all remaining values from the other array

*/

let arr1 = [1, 10, 50, 60];
let arr2 = [2, 14, 99, 100, 200, 300, 400, 500];

// [1, 10, 50]      [2, 14, 99, 100]

// My solution // passed
function merge(arr1, arr2) {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;
  let i = 0;
  let j = 0;
  let sortedArr = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sortedArr.push(arr1[i]);
      i++;
    } else {
      sortedArr.push(arr2[j]);
      j++;
    }
  }

  if (i > j) sortedArr = sortedArr.concat(arr2.slice(j));
  if (j > i) sortedArr = sortedArr.concat(arr1.slice(i));

  return sortedArr;
}

// console.log(merge(arr1, arr2));
// console.log(merge([], []));

module.exports = {
  merge,
};
