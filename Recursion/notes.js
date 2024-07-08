function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

// console.log(sumRange(2))

/* 
How this works:

SumRange(3)        6
    return 3 + sumRange(2)     3
                return 2 + sumRange(1)
                                return 1

- Once the base case is satisfied, the recursive function can finally go up in the tree and handle all of the other returns statements.

*/

// Iterative factorial function

/* 
factorial of 5 : 5 * 4 * 3 * 2 * 1

 function factorial(num) {
   let product = 1;
   for (let i = num; i > 0; i--) {
     product *= i;
   }
   return product;
 }

 console.log(factorial(10));

 */

// Recursive Factorial Function

function factorialRecursive(num) {
  if (num === 1) return 1;

  return (num *= factorialRecursive(num - 1));
}

console.log(factorialRecursive(5));
