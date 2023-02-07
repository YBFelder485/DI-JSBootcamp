const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Use the reduce() method to combine all of these into a single string.
const sentence = epic.reduce((total, current) => (total += current + ""), "")
console.log(sentence);