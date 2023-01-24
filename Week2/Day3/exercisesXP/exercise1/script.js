const people = ["Greg", "Mary", "Devon", "James"];


// Write code to remove “Greg” from the people array.
people.shift()

// Write code to replace “James” to “Jason”.
people.splice(2,1, "Jason")

// Write code to add your name to the end of the people array.
people.push("Yaakov")

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf("Mary"))

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
const newList = people.slice(1,3)

// Write code that gives the index of “Foo”. Why does it return -1 ?
people.indexOf("Foo")
-1 // This means that Foo cannot be found. -1 means "Cannot be found"

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
const last = people[people.length - 1]
//index of the last element will always be 1 index prior to the full length of the array



//Part 2

// Using a loop, iterate through the people array and console.log each person.
for (const idv of people) {
    console.log("Hey there,",idv)
}   

// Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
// Hint: take a look at the break statement in the lesson.
for (const idv of people) {
    console.log("Hey there,",idv)
    if (idv === "Jason"){
        break
    }
}   
