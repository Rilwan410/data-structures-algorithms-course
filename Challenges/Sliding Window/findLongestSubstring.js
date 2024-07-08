/*
Write a function called findLongestSubstring, which accepts the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6


*/

// My solution (FAILED)

// function findLongestSubstring(str) {
//   if (str.length < 1) return 0;
//   str = str.split("");
//   let strCount = [];
//   let longestStr;
//   let tempStr;
//   for (let i = 0; i < str.length; i++) {
//     if (strCount.includes(str[i])) break;
//     strCount.push(str[i]);
//     //   tempStr = strCount
//   }
//   tempStr = strCount;
//   console.log(str);
//   console.log(strCount);
//   let newStr = [...tempStr];
//   //   console.log(tempStr);
//   //   console.log(newStr);

//   //   newStr.shift();
//   // console.log(tempStr)
//   // console.log(newStr)

//   for (let i = tempStr.length - 1; i < str.length; i++) {
//     if (!newStr.includes(str[i])) {
//       newStr.push(str[i]);
//     } else newStr.shift();

//     if (newStr.length > tempStr.length) tempStr = [...newStr];
//     console.log(`
//         newStr: ${newStr}
//         tempStr: ${tempStr}
//         `);
//   }
//   return tempStr.length;
// }

// findLongestSubstring("rithmschool");
// console.log("===========================");
// findLongestSubstring("thisisawesome");
// console.log("===========================");
// findLongestSubstring("thecatinthehat");
// console.log("===========================");
// findLongestSubstring("bbbbbb");
// console.log("===========================");
// findLongestSubstring("longestsubstring");
// console.log("===========================");
// findLongestSubstring("thisishowwedoit");

// Correct Solution

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

console.log("===========================");
console.log(findLongestSubstring("thisisawesome"));
console.log("===========================");
console.log(findLongestSubstring("thecatinthehat"));
console.log("===========================");
console.log(findLongestSubstring("bbbbbb"));
console.log("===========================");
console.log(findLongestSubstring("longestsubstring"));
console.log("===========================");
console.log(findLongestSubstring("thisishowwedoit"));
