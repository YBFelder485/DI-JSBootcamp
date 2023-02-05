const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.

colors.forEach((color, index) => {
    const incrementedIndex = index + 1;
    console.log(`${incrementedIndex}${getOrdinal(incrementedIndex)} choice is ${color}`);
})

function getOrdinal(index) {
    return (index === 1 || index === 2 || index === 3) ? ordinal[index] : ordinal[0];
}