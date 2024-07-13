/*
Binary Search Pseudocode
Write a function called binarySearch()
    - This function accepts a sorted Array
    - Create a left pointer at the start of the array, and a right pointer at the end of the array
    - While the left pointer comes before the right pointer:
        .create a pointer in the middle
        .If you find the value you want, return the index
        .If the value is too small, move the left pointer up
        .If the value is too large, move the right pointer down
    
    - If you never find the value return -1
*/

const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// My solution  // passed // ( don't know if I used binary search correctly though)

function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  let middle = Math.floor(arr.length / 2);
  while (left < right) {
    if (arr[middle] === val) return middle;
    if (arr[left] === val) return left;
    if (arr[right] === val) return right;

    if (arr[middle] > val && right == arr.length - 1) {
      right = middle;
      if (arr[right] === val) return right;
    }
    if (arr[right > val]) right--;

    if (arr[middle] < val && left == 0) {
      left = middle;
      if (arr[left] === val) return left;
    }
    if (left < val) left++;
  }
  return -1;
}

// Better Solution

function searchBinary(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle !== val] && start <= end) {

    if (val < arr[middle]) end = middle - 1; // -1 because the middle is already accounted for not being the value

    else start = middle + 1; // +1 because the middle is already accounted for not being the value

    middle = Math.floor((start + end) / 2)
  }

  return arr[middle] === val ? middle : -1
}
