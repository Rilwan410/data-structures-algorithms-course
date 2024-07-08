/* 

Pattern that can be used: frequency counter , multiple pointers

Implement a function called, areThereDuplicates() which accepts a variable number of arguments, and checks whether there are duplicates among the arguments passed in. You can solve this using the frequency counter patter OR the multiple pointers pattern.

areThereDuplicates(1,2,3) // false
areThereDuplicates(1,2,2) // true
areThereDuplicates('a','b','c','a') // true

Restrictions:
Time: O(n)
Space: O(n)

Bonus:
Time: O(n log n)
Space: O(1)

*/


// My solution // 
function areThereDuplicates(...args) {
  let frequency = {};
  for (let count of args) {
    if (frequency[count]) {
      frequency[count]++;
    } else frequency[count] = 1;
  }

  for (let duplicates in frequency) {
    if (frequency[duplicates] > 1) return true;
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "a"));
