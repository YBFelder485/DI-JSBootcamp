const url = "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2";

const xhr = new XMLHttpRequest();
xhr.addEventListener("load", logRequest);
xhr.open("GET", url);
xhr.send()

function logRequest (e){
    const response = JSON.parse(xhr.response);
    console.log(response);
}