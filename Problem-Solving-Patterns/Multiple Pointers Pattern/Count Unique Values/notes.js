// Implement a function called countUniqueValues(), which accepts a sorted array , and counts the unique values in the array, There can be negative numbers in the array, but it will be sorted

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4

// My solution (terrible in time complexity) //
function countUniqueValues(arr) {
  let checker = [];
  for (let i = 0; i < arr.length; i++) {
    if (!checker.includes(arr[i])) {
      checker.push(arr[i]);
    }
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] !== arr[i] && !checker.includes(arr[j])) {
        checker.push(arr[j]);
      } else continue;
    }
  }
  return checker.length;
}

const arrayExample1 = [1, 2, 4, 4, 4, 5]; // should be 4
const arrayExample2 = [-4, -1, -1, 1, 2]; // should be 4
const arrayExample3 = []; // should be 0
const arrayExample4 = [1, 2, 2, 2, 2, 2]; // should be 2
const arrayExample5 = [1, 2, 2, 2, 2, 3, 4, 12, 7]; // should be 6

console.log(countUniqueValues(arrayExample5));

// Better (more efficient) solution (O(N) Time complexity)

function countUniqueValuesRefactor(arr) {
    if (arr.length === 0) return 0;
    var i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}
console.log(countUniqueValuesRefactor(arrayExample5));
