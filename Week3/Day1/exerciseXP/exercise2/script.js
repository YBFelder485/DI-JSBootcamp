// Add a “light blue” background color and some padding to the <div>.
document.querySelector("div").style.backgroundColor = "lightblue";

// Do not display the <li> that contains the text node “John”.
document.getElementsByTagName("Li")[0].style.display = "none";

// Add a border to the <li> that contains the text node “Pete”.
document.getElementsByTagName("Li")[1].style.border = "1px solid orange";

// Change the font size of the whole body.
document.body.style.fontSize = "2rem"