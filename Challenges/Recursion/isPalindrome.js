/*
Write a recursive function called isPalindrome which returns true if the string passed to is a palindrome (reads the same forward and backward). Otherwise it returns false
*/




// My solution // copied most of the code from reverse.js since its essentially the same steps

function isPalindrome(str) {
  str = str.split("");
  let reverseStr = [];

  function helperFunc(input) {
    if (input.length == 0) return input;
    reverseStr.push(input[input.length - 1]);

    helperFunc(input.slice(0, -1));
  }

  helperFunc(str);

  return reverseStr.join("") === str.join("");
}

