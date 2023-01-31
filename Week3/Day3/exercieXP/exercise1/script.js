// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.
setTimeout(alertHello, 2000)
setTimeout (addParagraph, 2000)
const interval = setInterval(addParagraph, 2000)

function alertHello(){
    alert("Hello World!")
}

// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

function addParagraph(){
    const p = document.createElement("p")
    p.textContent = "Hello World"
    const container = document.getElementById("container")
    if (container.children.length < 5) {
        container.appendChild(p)
    } else {
        clearParagraphInterval()
    }
}

// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

const button = document.getElementById("clear")
button.addEventListener("click", clearParagraphInterval)

function clearParagraphInterval(){
    clearInterval(interval)
}