/*
Bubble Sort Pseudocode
    -define a function called swap()

    - Start looping with a variable called i, at the end of the array towards the beginning

    - Start an inner loop with a variable called j from the beginning until i - 1

    - If arr[j] is greater than arr[j+1], swap those two values!

    - return the sorted array
*/

function swap(arr) {
  for (let i = 0; i < arr.length; i++) {
    temp = arr[i];
    if (arr[i + 1] < arr[i]) {
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  return arr;
}

console.log(swap([37,45,29,8]));
