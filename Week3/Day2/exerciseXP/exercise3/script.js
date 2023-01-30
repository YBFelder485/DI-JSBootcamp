// Declare a global variable named allBoldItems.
let allBoldItems
// Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
function getBoldItems(){
    allBoldItems = document.getElementsByTagName("strong");
}
getBoldItems()

// Create a function called highlight() that changes the color of all the bold text to blue.
function highlight(){
    getBoldItems();
    for (const boldItem of allBoldItems) {
        boldItem.style.color = "blue";
    }
}

// Create a function called return_normal() that changes the color of all the bold text back to black.
function returnNormal(){
    getBoldItems();
    for(const item of allBoldItems){
        item.style.color = "black";
    }
}

// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() on mouseout (ie. when the mouse pointer is moved out of the paragraph).
const paragraph = document.querySelector("p");
paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", returnNormal);