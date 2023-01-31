// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
let distance = 0

function myMove(){
    setInterval(moveRedSquare, 1)
}

function moveRedSquare(){
    if (distance === 350) return
    distance += 1
    const redSquare = document.getElementById("animate")
    redSquare.style.left = distance + "px"
}