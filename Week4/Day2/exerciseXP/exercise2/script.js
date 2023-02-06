// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
function convertKilogramsToGrams(num) {
    return num * 1000;
}
const result = convertKilogramsToGrams(3);
console.log(result);

// Then, use function expression and invoke it.
const convertKilogramsToGrams = function(num) {
    return num * 1000;
}

// Write in a one line comment, the difference between function declaration and function expression.
// The main difference is that function expressions don't need a name and can be anonymous.

// Finally, use a one line arrow function and invoke it.
const convertKilogramsToGrams = (num) => num * 1000;