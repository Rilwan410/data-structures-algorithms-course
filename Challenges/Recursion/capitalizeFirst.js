/*
Write a recursive function called capitalizeFirst().
Given an array of strings, capitalize the first letter of each string in the array
*/



// My solution // works but I don't like how much code it is
function capitalizeFirst(strArr) {
  let newArr = [];

  (function helperFunc(input, input2) {
    if (input2.length === 0) return input;

    input.push(
      input2[0].split("")[0].toUpperCase() +
        input2[0].split("").splice(1).join("")
    );

    helperFunc(input, input2.slice(1));
  })(newArr, strArr);

  return newArr;
}

console.log(capitalizeFirst(["car", "taco", "banana"]));
