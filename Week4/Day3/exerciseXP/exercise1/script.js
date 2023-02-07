//Analyze these pieces of code before executing them. What will be the outputs ?

------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// Using spread, we will receive one long array ["bread", "carrot", "potato", "chicken", "apple", "orange"]
------2------
const country = "USA";
console.log([...country]);
//will spread to be 3 separate characters U, S, A
------Bonus------
let newArray = [...[,,]];
console.log(newArray);