// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.
// The output should be:

document.querySelector("form").addEventListener("submit", handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(document.querySelector("form"));

    const entries = formData.entries();
    const data = Object.fromEntries(entries);
    const dataString = JSON.stringify(data);
    const p = document.createElement("p");
    p.innerText = dataString;
    document.body.appendChild(p);
}