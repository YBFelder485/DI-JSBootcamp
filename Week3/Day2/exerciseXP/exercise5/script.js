// Add many events listeners to one element on your webpage. Use the click, mouseover, mouseout and dblclick events.
// Each listener should do a different thing, for instance - change position x, change position y, change color, change the font size… and more.

const form = document.getElementById("my-form");
const radius = document.getElementById("radius");
const volume = document.getElementById("volume");
form.addEventListener("submit", handleSubmit)

function handleSubmit(e){
    e.preventDefault();
    const r = Number(radius.value);
    if (Number.isNaN(r)) return;
    const vol = 4/3 * Math.PI * r ** 3;
    volume.value = vol;
} 

document.addEventListener("DOMContentLoaded", () => console.log("The HTML page was parsed and loaded")
);

document.addEventListener("keyup", (event) => console.log(event.keycode));

form.addEventListener("pointerenter", () => console.log("pointer inside form"));
form.addEventListener("pointerleave", () => console.log("pointer left form"));