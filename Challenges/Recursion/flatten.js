/*
Write a recursive function called flatten() which accepts an array of arrays and returns a new array with all values flattened.
*/

// flatten([1,2,3,[4,5]]) -> [1,2,3,4,5]
// flatten([1,[2,[3,4], [[5]]]]) -> [1,2,3,4,5]
// flatten([[1],[[[2]]], [[[[[[3]]]]]]]) -> [1,2,3]

// FAILED // DIDN'T Understand how to solve
function flatten(arr) {
  const result = [](function helperFunc(input) {
    if (input.length === 0) return input;
    if (input[0].length > 0) {
      result.push(input[0][0]);
    }
  })();
}
