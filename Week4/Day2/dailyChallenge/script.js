// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.

// Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
// In the function, create a variable named shopping that is equal to the groceries variable.
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
// Change the value of the payed key to false. Will we also see this modification in the shopping object ? Why ?

// Invoke the cloneGroceries function.

let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = (obj) => {
    const fruits = obj.fruits
    fruits.forEach(fruit => console.log(fruit));
}

const cloneGroceries = () => {
    let user = client;
    user = "Betty"; //This will not change "John" because it is in a different scope.
    const shopping = groceries;
    shopping.totalPrice = "$35"; //This will show in the shopping object because I'm not creating a new reference to the same object. It still exists, I am just modifying it.
    shopping.other.payed = false; //This will also show in the shopping object, for the same reason as previous statement. The objects have the same address in the memory.
    console.log(user, client);
    console.log(shopping);
    console.log(groceries);
}

displayGroceries(groceries);
cloneGroceries()