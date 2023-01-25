// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// Create a function named calculateTip() that takes no parameter.

// Inside the function, use prompt to ask John for the amount of the bill.

// Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.

// Console.log the tip amount and the final bill (bill + tip).

// Call the calculateTip() function.

function calculateTip(){
    const sum = Number(prompt("How much is the bill?"))
    let tip
    if (sum < 50) tip = 0.20
    if (sum > 50 && sum < 200) tip = 0.15
    if (sum > 200) tip = 0.10

    const finalBill = sum * (1 + tip)
    
    console.log("bill = " , sum)
    console.log("bill+tip = " , finalBill)
}
calculateTip()