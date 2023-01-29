// In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
document.getElementById("navBar").setAttribute("id", "socialNetworkNavigation");

// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
const li = document.createElement("li");

// Create a new text node with “Logout” as its specified text.
const logout = document.createTextNode("Logout");

// Append the text node to the newly created list node (<li>).
li.appendChild(logout);

// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
document.querySelector("ul").appendChild(li);
