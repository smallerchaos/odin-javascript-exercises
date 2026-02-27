const removeFromArray = function(arr, ...rest) {
    for(let i = 0; i <= rest.length; i++) {
        while (arr.includes(rest[i])){
            arr.splice(arr.indexOf(rest[i]), 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

/*
Thoughts and reflections

They used the rest operator! None of the resources they had us read included it but I feel like that in and of itself was an exercise to Google something you don't know. I'm proud that I found the answer!

They had a simple answer that used the .forEach method on the array to create a new array to exclude things. They also had a more advanced version that used filter. I used includes which is one step before the advanced solution:

const removeFromArray = function (array, ...args) {
    return array.filter(val => !args.includes(val))
}

Dang.

*/