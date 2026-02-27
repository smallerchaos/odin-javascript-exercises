const repeatString = function(string, num) {
    if (num < 0) {
        return `ERROR`;
    }
    let newString = [];
    for (let i = 0; i < num; i++) {
        newString.push(string);
    }
    return newString.join("");
};

// Do not edit below this line
module.exports = repeatString;

// Ooops I could have just += the string like in the provided solution. I guess I was too array-brained....
