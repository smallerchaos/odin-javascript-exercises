const leapYears = function(year) {
    if (year % 100 === 0 && year % 400 !== 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;

/*

Thoughts and Reflections

OH... That worked on the first try... Huh. Well, looking at the solution, it seems that they created variables for isYearDivisibleByFour, isCentur, and isYearDivisibleByFourHundred. I think this is for legibility since I'm sure they could have done it the same way I did. However, by setting up these variables, it makes the logic of the if statement more concise and legible to humans. This is certainly something I'd like to be cognizant of going forward.

*/
