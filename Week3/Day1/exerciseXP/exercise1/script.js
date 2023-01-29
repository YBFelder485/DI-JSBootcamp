// Add the code above, to your HTML file

// Using Javascript:
// Retrieve the div and console.log it
document.getElementById("container")
const div = document.getElementById("container")
console.log(div)

// Change the name “Pete” to “Richard”.
document.querySelector(".list").children[1].textContent = "Richard"

// Change each first name of the two <ul>'s to your name.
const names = document.querySelectorAll(".list")

names.forEach(list => list.firstElementChild.textContent = "Yaakov")

// Delete the <li> that contains the text node “Sarah”.
names[1].children[1].remove()
