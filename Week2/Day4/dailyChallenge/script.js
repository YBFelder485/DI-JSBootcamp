// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.

const wordString = prompt("Type a few words separated by commas");

const words = wordString.split(",");

const lengthOfLongestWord = getLengthOfLongestWord();

displayRows();
function displayRows(){
    const delimiterRow = createDelimiterRow();
    console.log(delimiterRow);
    for (const word of words){
        displayWord(word);
    }
    console.log(delimiterRow);
}

function displayWord(word) {
    const numberOfSpacesToAdd = lengthOfLongestWord - word.length + 1;
    const emptySpaces = " ".repeat(numberOfSpacesToAdd);
    console.log("* " + word + emptySpaces + "*");
}

function getLengthOfLongestWord(){
    let getLengthOfLongestWord = 0;
    for (const word of words) {
        const wordLength = word.length;
    if (wordLength > lengthOfLongestWord) {
        lengthOfLongestWord = wordLength;
        }
    }
    return lengthOfLongestWord;
}

function createDelimiterRow(){
    const numberOfStarsOnFirstRow = lengthOfLongestWord + 4;
    let row = "";
    for (let i = 0;i < numberOfStarsOnFirstRow;i++){
        row = row + "*";
    }
    return row;
}