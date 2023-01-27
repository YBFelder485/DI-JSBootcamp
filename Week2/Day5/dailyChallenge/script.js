// Prompt the user for a number to begin counting down bottles.
// In the song, everytime a bottle drops,
// the subtracted number should go up by 1.
// The song should end with “0 bottle of beer on the wall” or “no bottle of beer on the wall”.
// Note : Make sure you get the grammar correct.
// For 1 bottle, you pass “it” around.
// For more than one bottle, you pass “them” around.

let numberOfBeers = Number(prompt("Pick a number of bottles to get this party started!"));
let numberOfBeersToSubtract = 1;

while (numberOfBeers > 0){
    const lyrics = makelyrics(numberOfBeers, numberOfBeersToSubtract);
    console.log(lyrics);
    numberOfBeers = numberOfBeers - numberOfBeersToSubtract;
    numberOfBeersToSubtract += 1;
}

function makelyrics(numberOfBeers, numberOfBeersToSubtract){
    const singularOrPlural = makeSingularOrPlural(numberOfBeers);
    const lyrics = `${numberOfBeers} ${singularOrPlural} of beer on the wall
${numberOfBeers} ${singularOrPlural} of beer
Take ${numberOfBeersToSubtract} down, pass it around
${numberOfBeers - numberOfBeersToSubtract} ${makeSingularOrPlural(numberOfBeers - numberOfBeersToSubtract)} of beer on the wall`;
    return lyrics;
}

function isMoreThanOne(numberOfBeers){
    if (numberOfBeers > 1){
        return true;
    } else {
        return false;
    }
}

function makeSingularOrPlural(numberOfBeers){
    if(isMoreThanOne(numberOfBeers)){
        return "bottles";
    } else {
        return "bottle";
    }
}