// Retrieve the form and console.log it.
const form = document.querySelector("form");
console.log(form);

// Retrieve the inputs by their id and console.log them.
const firstName = document.getElementById("fname")
const lastName = document.getElementById("lname")

console.log(firstName, lastName);


// Retrieve the inputs by their name attribute and console.log them.
const firstName = document.querySelector("[name=fname]").value;
const lastName = document.querySelector("[name=lname]").value;

console.log(firstName, lastName);

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ? // because the default action of the submit button is to refresh the page

function logFormInputs(event){
    event.preventDefault();
    const firstName = document.querySelector("[name=fname]").value;
    const lastName = document.querySelector("[name=lname]").value;
    console.log(firstName, lastName);
    if (firstName === "" || lastName === "") {
        alert("Please fill in all fields")
    } else {
        const ul = document.querySelector(".usersAnswer")
        const firstLi = document.createElement("li");
        const secondLi = document.createElement("li");
        firstLi.innerText = firstName
        secondLi.innerText = lastName
        ul.append(firstLi, secondLi);
    }
}

form.addEventListener("submit", logFormInputs); 



// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :

// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>

