//Part 1
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.
// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.

function makeJuice(size) {
    function addIngredients(first, second, third) {
        console.log(" the ingredients are:", first, second, third);
    }
    addIngredients("vodka", "coke", "lemon");
    console.log("The customer wants a drink of this size:", size)
}
makeJuice("large");

// Part 2
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>". Use the forEach method.

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.

function makeJuice(size) {
    const ingredients = [];
    addIngredients("vodka", "coke", "lemon");
    addIngredients("ginger ale", "lime", "salt");
    console.log("ingredients: ", ingredients);
    displaySentence(ingredients);

    function addIngredients(first, second, third) {
        ingredients.push(first, second, third);
    }

    function displaySentence(ingredients) {
        const firstPart = `The client wants a ${size} drink, containing `;
        let secondPart = "";
        const isLastElement = (array, index) => index === array.length - 1;
        ingredients.forEach((ingredient, i) => {
            const word = `${ingredient}${isLastElement(ingredients, i) ? "." : ", "}`;
            secondPart += word;
        });
        const sentence = firstPart + secondPart;
        const p = document.createElement("p");
        p.innerText = sentence;
        document.body.appendChild(p);
    }
}
makeJuice("large");