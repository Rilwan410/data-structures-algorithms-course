/*  

Patterns that can be used: frequency counter

Write a function called sameFrequency.
Given two positive integers, find out it the two numbers have the same frequency of digits

Your Solution MUST have the following complexities
Time: O(N)

Sample Inputs:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

*/

//  My Solution //
function sameFrequency(int1, int2) {
  int1 = int1.toString().split("").sort().join("");
  int2 = int2.toString().split("").sort().join("");

  if (int1 !== int2) return false;

  return true;
}

// sameFrequency(108, 801);
console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
