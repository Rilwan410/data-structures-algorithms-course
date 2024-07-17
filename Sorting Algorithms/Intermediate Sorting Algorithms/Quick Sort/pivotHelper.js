/** Pivot Helper Pseudocode
    - In order to implement merge sort, it's useful to first implement a function responsible for arranging elements, in an array on either side of a pivot
    
    - Given an array, this helper function should designate an element as the pivot 

    - It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot

    - The order of elements on either side of the pivot doesn't matter

    - The helper should do this in place, that is, it should not create a new array

    -When complete, the helper should return the index of the pivot
*/

/*
Pivot Pseudocode pt.2
- It will help to accept three arguments: an array, a start index, an end index(these can default to 0 and the array length minus 1, respectively)

- Grab the pivot from the start of the array

- Store the current pivot index in a variable (this will keep track of where the pivot should end up)

- Loop through the array from the start until the end
    .If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
*/

// Failed// functionality is correct, but didn't pass pseudocode
function pivotHelper(arr, startIndex = 0, endIndex = arr.length - 1) {
  let pivot = startIndex;
  let less = [];
  let greater = [];
  for (let i = startIndex; i <= endIndex; i++) {
    if (arr[i] < arr[pivot]) {
      less.push(arr[i]);
    } else if (arr[i] > arr[pivot]) {
      greater.push(arr[i]);
    }
  }
  less.push(arr[pivot]);
  let newArr = less.concat(greater);
  return newArr.indexOf(arr[pivot]);
}

// console.log(pivotHelper([5, 2, 1, 8, 4, 7, 6, 3]));
// console.log(pivotHelper([28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18]));
// console.log(pivotHelper([4, 8, 2, 1, 5, 7, 6, 3]));

// COrrect Solution

function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}
// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));

module.exports = {
  pivot,
  pivotHelper,
};
