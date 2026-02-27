// My solution
const fibonacci = function(num) {
    num = +num;
    let fibonacciArray = [];
    if (num < 0) {
        return "OOPS";
    } else if (num == 0) {
        return 0;
    }
    for(let i = 1; i <= num; i++) {
        if (fibonacciArray.length < 2) {
          fibonacciArray.push(1);
        } else {
          let prevOne = fibonacciArray[fibonacciArray.length - 1];
          let prevTwo = fibonacciArray[fibonacciArray.length - 2];
          fibonacciArray.push(prevOne + prevTwo);
        }
    }
    return fibonacciArray[fibonacciArray.length - 1];
};

// Provided solution
const fibonacci = function (countArg) {
    let count 
    if (typeof countArg !== 'number') {
        count = parseInt(countArg)
    } else {
        count = countArg
    }

    if (count < 0) return "OOPS";
    if (count == 0) return 0;

    let firstPrev = 1;
    let secondPrev = 0;

    for (let i = 2; i <= count; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }

    return firstPrev;
}

/*
Thoughts and Reflections

Overall, I did the same things that the provided solution did from the converting into a number and checking to see if it was greater than 0 to creating variables for the previous number to the previous previous number. I also used a for loop this time like the provided solution! However, they just stored the numbers in variables as it counted up while I made a whole array. Though it works, I think their solution was more efficient because, if we're finding the fibonacci number of really big numbers, I'd be storing a really big array for no reason. (But I did like the idea of being able to see the previous numbers in the sequence. 🥲)

Going forward, I think I want to be a bit more cognizant about only storing what is necessary!
*/

// Do not edit below this line
module.exports = fibonacci;
