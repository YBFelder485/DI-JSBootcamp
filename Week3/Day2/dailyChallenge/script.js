// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.

const button = getButton();
button.addEventListener("click", handleClick);

function handleClick(e) {
    e.preventDefault();
    const noun = document.getElementById("noun").value;
    const adjective = document.getElementById("adjective").value;
    const person = document.getElementById("person").value;
    const verb = document.getElementById("verb").value;
    const place = document.getElementById("place").value;

    if (noun === "" || adjective === "" || person === "" || verb === "" || place === "") return
    const story = writeStory(noun, adjective, person, verb, place)
    console.log(story)
    appendStory(story)
}

function appendStory(story){
    const paragraph = document.getElementById("story")
    const span = document.createElement("span")
    span.innerText = story
    paragraph.appendChild(span)
}

function writeStory(noun, adjective, person, verb, place){
    return `My ${noun} is so ${adjective}. It amazes me that ${person} can ${verb} in ${place}.`
}

function getButton(){
    return document.getElementById("lib-button");
}