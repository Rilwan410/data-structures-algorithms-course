/*
Write a recursive function called capitalizeWords(). Given an array of words, return a new array containing each word capitalized.
*/



// My solution // Passed
function capitalizeWords(arr) {
  if (arr.every((word) => word === word.toUpperCase())) return arr;

  arr.push(arr[0].toUpperCase());

  return capitalizeWords(arr.slice(1));
}

console.log(capitalizeWords(["i", "am", "learning", "recursion"]));

