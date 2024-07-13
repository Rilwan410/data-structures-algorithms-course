/* Linear Search Pseudocode

- function accepts an array and a value
- Loop through the entire array and check if the current array element is equal to the value 
- if it is, return the index at which the element is found
- if the value is never found, return -1

*/

// My solution // passed
function linearSearch(arr, val) {
  let index = 0;

  return (function helperFunc(input) {
    if (input.length === 0) return -1;
    if (input[0] === val) return index;
    index++;
    return helperFunc(input.slice(1));
  })(arr);
}


