// Create an object called family with a few key value pairs.
const family = {
    gma: "Sue",
    mama: "Susan",
    baby: "Susie",
}

// Using a for in loop, console.log the keys of the object.
for (const female in family){
    console.log(female)
}

// Using a for in loop, console.log the values of the object.
for (const female in family){
    console.log(family[female])
}
