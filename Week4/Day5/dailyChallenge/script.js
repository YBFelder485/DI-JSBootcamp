// Create a function that:

// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.

function isAnagram(sentence1, sentence2) {
    const total = [];
    for (const letter of str1){
        total[letter] = total[letter] + 1 || 1;
    }
    for (const letter of str2){
        total[letter] = total[letter] ? total[letter] -1 : -1;
    }
    const differences = Object.values(total);
    return differences.every((num) => num === 0);
}

const result1 = isAnagram("azdlowaazz", "azdowbazzl")
console.log(result1)