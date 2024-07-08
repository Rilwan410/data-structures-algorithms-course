//  Example //

// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

// sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
// sumZero([-2,0,1,3]) // undefined
// sumZero([1,2,3]) // undefined

//  Naive Solution (Time Complexity - O(N^2) / Space Complexity - O(1))  //

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// Refactored Solution (Time Complexity - O(N) / Space Complexity - O(1) //

function sumZeroRefactor(arr) {
  let left = 0; /* starts on the left side */
  let right = arr.length - 1; /* starts on the right side */

  while (left < right) /* while the the left side is incrementing up */ {

    let sum = arr[left] + arr[right] /* add numbers on the opposite sides */;

    if (sum === 0) return [arr[left], arr[right]] /* if the sum equal zero then stop */;

    else if (sum > 0) right-- /* if the sum is greater than 0 decreased the upper limit */;

    else left--; /* otherwise the number is less than 0, in which case you would increase from the lower limit */
  }
}


