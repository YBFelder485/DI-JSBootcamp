// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML.

const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]

for (const planet of planets){
    console.log(planet)
    const div = document.createElement("div")
    div.classList.add("planet")
    div.classList.add(planet.toLowerCase())
    const section = document.querySelector(".listPlanets")
    section.appendChild(div)
}