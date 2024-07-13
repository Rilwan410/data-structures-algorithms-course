/* 
Pseudocode
    function stringSearch(lgStr, pattern)
    - Loop over the longer string
    - Loop over the shorter string
    - If the characters don't match, break out of hte inner loop
    - If the characters do match, keep going
    - If you complete the inner loop and find a match increment the count of matches
    - return the count
*/


// My Solution // Passed
function stringSearch(lgStr, pattern) {
  let patternCnt = 0;
  let patternArr = [];
  let j = 0;
  for (let i = 0; i < lgStr.length; i++) {
    if (patternArr.join("") === pattern) {
      patternCnt++;
      patternArr = [];
      j = 0;
    }
    if (lgStr[i] === pattern[j]) {
      patternArr.push(lgStr[i]);
      j++;
    } else {
      patternArr = [];
      j = 0;
    }
  }
  return patternCnt;
}


console.log(stringSearch('lori loled', 'lol'))