/*

Write a function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers, 1,1,2,3,5,8,... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers
*/

// MY SOLUTION!! I DID THIS BY MYSELF!!! //

function fib(num) {
  let fibArr = [];

  (function helperFunc(input) {
    if (fibArr.length !== input) {
      if (fibArr.length == 0) {
        fibArr.push(1);
        fibArr.push(1);
      } else {
        fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
      }
      helperFunc(input);
    } else return fibArr;
  })(num);

  return fibArr[fibArr.length - 1];
}

// Another Solution
function fib2(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
