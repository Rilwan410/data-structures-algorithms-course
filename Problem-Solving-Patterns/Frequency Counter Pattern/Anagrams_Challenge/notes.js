// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase , or name formed by rearranging the letters of another, such as cinema, formed from iceman

// validAnagram("","") // true
// validAnagram("aaz", "zza") // false
// validAnagram("anagram", "nagaram") // true
// validAnagram("rat","car") // false
// validAnagram("awesome", "awesom") // false
// validAnagram("qwerty", "qeywrt") // true
// validAnagram("texttwisttime", "timetwisttext") // true


// ================= My Solution ====================

function validAnagram(str1, str2) {
  if (!(str1.length === str2.length)) return false;

//   str1 = str1.split("").sort().join("");
//   str2 = str2.split("").sort().join("");

  //   {a:2,n:1,g:1,r:1,m:1}
  // {n:1,a:2,g:1,r:1,m:1}

  let frequency1 = {};
  let frequency2 = {};

  for (let char of str1) {
    frequency1[char] = (frequency1[char] || 0) + 1;
  }

  for (let char of str2) {
    frequency2[char] = (frequency2[char] || 0) + 1;
  }

  for (let prop in frequency1) {
    if (frequency1[prop] !== frequency2[prop]) return false;
  }

  return true;
}

console.log(validAnagram("aaz", "zza") )
console.log(validAnagram("","") )
console.log(validAnagram("anagram", "nagaram"))
console.log(validAnagram("rat","car"))
console.log(validAnagram("awesome", "awesom"))
console.log(validAnagram("qwerty", "qeywrt"))
console.log(validAnagram("texttwisttime", "timetwisttext"))

