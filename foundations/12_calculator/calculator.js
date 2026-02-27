const add = function(num1, num2) {
	return +num1 + +num2;
};

// ------------------- //

const subtract = function(num1, num2) {
	return +num1 - +num2;
};

// ------------------- //

// My solution
const sum = function(array) {
  if (array.length < 1) {
    return 0;
  }
	return array.reduce((sum, item) => sum + item);
};

// Provided solution
// const sum = function(array) {
//   return array.reduce((total, current) => total + current, 0);
// }

/*
Thoughts and Reflections

Oh, so I didn't really need to test to see if the array had a length greater than 1 because if I set the initiator to 0, then it would automatically be 0 regardless of the length of the array! Dang, I forgot about the initiator!
*/

// ------------------- //

const multiply = function(array) {
  return array.reduce((total, item) => total * item);
};

// ------------------- //

const power = function(num1, num2) {
	return num1 ** num2;
};

// ------------------- //

// My solution
const factorial = function(num) {
	let numCounter = num;
  let factorial = 1;
  while (numCounter > 0) {
    factorial = factorial * numCounter;
    numCounter--;
  }
  return factorial;
};

// Provided Solution
// const factorial = function (n) {
//   let product = 1;
//   for (let i = n; i > 0; i++) {
//     product *= i;
//   }
//   return product;
// }

/*
Thoughts and Reflections

I basically did the same thing as the solution using a while loop rather than a for loop. I think, in a way, for loops are simpler and less likely to cause infinite loops because their incrementor is built in and less likely to be messed up. Well... it worked out anyway! Also, I guess *= is a thing too! Not just += or -=. Fumu fumu.
*/

// ------------------- //

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
