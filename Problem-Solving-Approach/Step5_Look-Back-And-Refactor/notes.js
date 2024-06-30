// Write a function which takes in a string and returns counts of each character in the string.

//  ------Original Solution--------
// function charCount(str) {
//   // Make objects to return at end

//   let charCount = {};

//   /* loop over string for each character... */

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();

//     // -if the char is a number/letter AND is a key in object, add one to the existing count
//     if (charCount[char]) {
//       charCount[char]++;

//       //   - if the char is a number/letter AND NOT a key in object, initialize char and add one to count
//     } else {
// // -if char is something else (space, period, etc.) don't do anything
//       if (!/\w/gi.test(char)) continue;
//       charCount[char] = 1;
//     }
//   }

//   /*

// */

//   // - return object at end
//   return charCount;
// }

// ======= Refactored Solution =======
function charCount(str) {
  let charCount = {};

  for (let char of str /* changed for loop to for-of loop */) {
    char = char.toLowerCase();

    // Changed if statements to short circuit statements
    (/\w/gi.test(char) && charCount[char]++) ||
      (/\w/gi.test(char) && (charCount[char] = 1));
  }

  return charCount;
}

// console.log(charCount("hello my name is Rilwan!"));
console.log(charCount("Hello WORLD hi!!!"));
