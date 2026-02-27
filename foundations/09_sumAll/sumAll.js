const sumAll = function(num1, num2) {
    // Check to make sure num1 and num2 are numbers. If not, throw error.
    if(Number.isNaN(num1) || 
    Number.isNaN(num2) ||
    num1 < 0 ||
    num2 < 0 ||
    !Number.isInteger(num1) ||
    !Number.isInteger(num2)) {
        return "ERROR";
    }

    // Determine which argument is higher
    let lowerNumber;
    let higherNumber;
    if (num1 < num2) {
        lowerNumber = num1;
        higherNumber = num2;
    } else {
        lowerNumber = num2;
        higherNumber = num1;
    }
    
    let allNumbers = [];
    for (let i = lowerNumber; i <= higherNumber; i++) {
        allNumbers.push(i);
        debugger;
    }
    return allNumbers.reduce((sum, current) => sum + current, 0);
};

// Do not edit below this line
module.exports = sumAll;


/*
Thoughts and Reflections

Oh, I kinda rolled all of my ERROR handling into one giant if statement but I guess breaking them out is also better.

I also did the same thing for assigning min and max but I kind of made new variables for it rather than swapping the existing ones.

THEY USED sum += i!!! That's what I tried at first but it wasn't working (aka the loop became infinite) so I resorted to an array but it was just a problem with my for loop since I didn't put a semicolon after the i <= max, rather a regular comma. Thus I resorted to using an array in the process but didn't go back and try the sum += i after I got my for loop working. T_T

*/