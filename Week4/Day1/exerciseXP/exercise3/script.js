// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. Use ternary operator

const isString = (val) => (typeof val === "string" ? true : false);

console.log(isString("hello"));
console.log(isString(123));