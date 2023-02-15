// In the HTML file, create a form with 4 inputs:
// the latitude and longitude of the first city
// the latitude and longitude of the second city

// Retrieve the input’s value and display the hour of the sunrise for both city ONLY when both promises are resolved
// Hint : Use Promise.all()

document.querySelector("form").addEventListener("submit", handleSubmit);

function handleSubmit(e){
    e.preventDefault();
    console.log(form.elements);
    const [city1lat, city1long, city2lat, city2long] = [...form.elements].map((input) => input.value);

    const url1 = `https://api.sunrise-sunset.org/json?lat=${city1lat}&lng=${city1long}`;
    const url2 = `https://api.sunrise-sunset.org/json?lat=${city2lat}&lng=${city2long}`;

    const promise1 = fetch(url1);
    const promise2 = fetch(url2);
    Promise.all([promise1.then((res) => res.json()), promise2.then((res) => res.json())])
    .then((res) => console.log(res))
    .catch((error) => console.error(err));
}