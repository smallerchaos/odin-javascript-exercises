const reverseString = function(string) {
    let tempArr = string.split('');
    return tempArr.reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;

/*
solution

const reverseString = function (string) {
    return string.split("").reverse().join("");
}

Ohhh I was so close. I wasn't sure if I could call the reverse and join methods on a string but I at least chained those two together because I knew that they were array methods. I suppose it works when all chained together because split turns string into an array which the other methods can then be called on no problem.
*/