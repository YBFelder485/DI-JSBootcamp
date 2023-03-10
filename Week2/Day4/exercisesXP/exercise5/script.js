// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.
function changeEnough(itemPrice, amountOfChange){
    const sum = calculateSum(amountOfChange)
    if (sum > itemPrice){
        console.log("you can afford it")
        return true
    } else {
        console.log("you cannot afford it")
        return false
    }
}

function calculateSum(arr){
    let sum = 0

    for (let i = 0; i < arr.length; i++){
    let coinValue
    const numberOfCoins = arr[i]
    if (i === 0) {coinValue = 0.25}
    if (i === 1) {coinValue = 0.10}
    if (i === 2) {coinValue = 0.05}
    if (i === 3) {coinValue = 0.01}
    console.log(numberOfCoins , "coins that are worth" , coinValue )
    sum = sum + numberOfCoins * coinValue
    }
    console.log("The total is" , sum)

    return sum
}

changeEnough(4.25, [25, 20, 5, 0])


// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01


// 4. To illustrate:

// After you created the function, invoke it like this:

// changeEnough(4.25, [25, 20, 5, 0])
// The value 4.25 represents the item’s price
// The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)

