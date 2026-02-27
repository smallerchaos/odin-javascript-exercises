// My solution

const palindromes = function (phrase) {
    let phraseArray = phrase.toLowerCase().split("");
    let cleanPhraseArray = [];
    let isLetter = /[a-z]/;
    let isNumber = /[0-9]/;
    phraseArray.forEach((element, index) => {
        if (isLetter.test(element) || isNumber.test(element)) {
            cleanPhraseArray.push(element);
        }
    });
    let reversephraseArray = cleanPhraseArray.slice().reverse();
    return cleanPhraseArray.join("") == reversephraseArray.join("");
};

// Provided solution

const palindromes = function (string) {
    const alphanumerical = `abcdefghijklmnopqrstuvwxyz0123456789`;

    const cleanedString = string
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');

    const reversedString = cleanedString.split('').reverse().join('');

    return cleanedString === reversedString;
}

/*
Thoughts and Reflections

Ohhh wow using filter is so smart. Also, I knew using regex wasn't the move because we haven't learned about it but it was the only way I could think to do it... 🙈 

There are some commonalities other than that. Making a reversed string and joining them together in the end to see if they are the same. Cleaning them with toLowerCase.

Well... it works...?
*/

// Do not edit below this line
module.exports = palindromes;
