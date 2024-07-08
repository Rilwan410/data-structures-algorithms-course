/* 
Write a function called isSubsequence() which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string, without their order changing.

Examples:

isSubsequence('hello', 'hello world') // true

isSubsequence('sing', 'sting') // true

isSubsequence('abc', 'abracadabra') // true

isSubsequence('abc', 'acb') // false (order matters)

Your Solution must have AT LEAST the following complexities:

Time Complexity: O(N+M)
Space Complexity: O(1)

*/

// Failed finding solution on my own...

/*FAILED* function isSubsequence(str, subStr) {
  console.log(str.length);
} */

// Correct Solution (Iterative)
function isSubsequence(str, subStr) {
  var i = 0;
  var j = 0;
  if (!str) return true; /* I don't understand this part */

  while (j < subStr.length) {
    if (subStr[j] === str[i]) i++;
    if (i === str.length) return true;
    j++;
  }
  return false;
}

// Another Correct Solution (Recursive)
function isSubsequenceRecursion(str, subStr) {
  if (str.length === 0) return true;
  if (subStr.length === 0) return false;

  if (subStr[0] === str[0])
    return isSubsequenceRecursion(str.slice(1), subStr.slice(1));
  return isSubsequenceRecursion(str, subStr.slice(1));
}

// console.log(isSubsequence("abc", "abracadabra"));
// console.log(isSubsequence("abc", "acb"));

// console.log(isSubsequenceRecursion("abc", "abracadabra"));
// console.log(isSubsequenceRecursion("abc", "acb"));


let arr = [1,2,3,4,5]

console.log(arr.slice(3))
