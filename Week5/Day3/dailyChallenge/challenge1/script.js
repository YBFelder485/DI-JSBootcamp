// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.
// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.

function makeAllCaps(words) {
    return new Promise((resolve,reject) => {
        if (words.every(isString)) {
            resolve(words.map((word) => word.toUpperCase()));
        } else {
            reject("Sorry, all values should be strings");
        }
    })
}

function setWords(words) {
    return new Promise((resolve, reject) => {
        if (words.length > 4) {
            resolve(words.sort());
        } else {
            reject("Sorry, array too short");
        }
    })
}

const words = ["Hello", "people", "how", "are", "you"];
makeAllCaps(words)
    .then(sortWords)
    .then(res => console.log(res));
    .catch(err => console.error(err));

function isString(arg) {
    return typeof arg === "string";
}