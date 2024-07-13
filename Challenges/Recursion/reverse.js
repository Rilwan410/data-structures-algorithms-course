/*
Write a recursive function called reverse which accepts a string and returns a new string in reverse
*/


// My solution // Passed

function reverse(str) {
  str = str.split("");
  let reverseStr = [];

  function helperFunc(input) {
    if (input.length == 0) return input;
    reverseStr.push(input[input.length - 1]);

    helperFunc(input.slice(0, -1));
  }

  helperFunc(str);

  return reverseStr.join("");
}


