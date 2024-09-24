// TASK 3
//============================================================================

//Exercise 1
function Evennumber(arr) {
  return arr.filter((number) => number % 2 === 0);
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filtereven = Evennumber(numbers);
console.log("Exercise 1 = ") + console.log(filtereven);
//============================================================================

//Exercise 2
function Maxnumber(arr) {
  return Math.max(...arr);
}
const numbersmax = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filtermax = Maxnumber(numbersmax);
console.log("Exercise 2 = ");
console.log(filtermax);
//============================================================================

//Exercise 3
function reverseString(str) {
  return str.split("").reverse().join("");
}

const inputString = "Web Master";
const reversedString = reverseString(inputString);
console.log("Exercise 3 = ");
console.log(reversedString);
//============================================================================

//Exercise 4
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

const numbersfilter = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 7, 8, 9, 9, 10];
const uniqueNumbers = removeDuplicates(numbersfilter);
console.log("Exercise 4 = ");
console.log(uniqueNumbers);
