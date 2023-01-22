//Part I
//Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

//Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

//Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
//For example : black mirror, money heist, and the big bang theory

//Console.log a sentence using both of the variables created above
//For example : I watched 3 series : black mirror, money heist, and the big bang theory


const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

const myWatchedSeriesLength = myWatchedSeries.length
console.log(myWatchedSeriesLength)

const myWatchedSeriesSentence = `${myWatchedSeries[0]}, ${myWatchedSeries[1]}, and ${myWatchedSeries[2]}.`
console.log(myWatchedSeriesSentence)

const fullSentence = `I watched ${myWatchedSeriesLength} series : ${myWatchedSeriesSentence}`
console.log(fullSentence)




//Part II
//Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
//Add, at the end of the array, the name of another series you watched.
//Add, at the beginning of the array, the name of your favorite series.
//Delete the series “black mirror”.
//Console.log the third letter of the series “money heist”.
//Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.


myWatchedSeries[2] = "friends";
console.log(myWatchedSeries)

myWatchedSeries.push("planet earth") 
console.log(myWatchedSeries)

myWatchedSeries.unshift("band of brothers")
console.log(myWatchedSeries)

delete myWatchedSeries[1]
console.log(myWatchedSeries)

const moneyHeist = myWatchedSeries[2]
console.log(myWatchedSeries[2])
console.log(moneyHeist[2])

console.log(myWatchedSeries)