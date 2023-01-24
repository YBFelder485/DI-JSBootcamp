// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
const number = Number(prompt("Choose a number"))
console.log(number)


// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
while (number != 10){
    const answer = Number(prompt("Choose a number"))
}

//I think my code is correct, but when I open the console and enter 10 into the prompt, it still continues to prompt. What am I doing wrong?