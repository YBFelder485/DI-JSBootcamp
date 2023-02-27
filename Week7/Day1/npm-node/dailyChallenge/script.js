// import { largeNumber } from "./main.js";
// const b = 5;
// console.log(largeNumber + b);

const http = require("hhtp");
const { largeNumber, getCurrentDate } = require("./main.js")
const server = http.createServer(handleResponse);
const port = 8080;
const host = "localhost";

function sayHello() {
    console.log("Server is listening on port", port);
}

function handleResponse(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(201);
// Part 2    res.end(`<h1>Response from Server</h1>
//     <p>The large number is ${largeNumber}</p>`);
//Part 3    res.end(`<p>The date and time are: ${getCurrentDate()}
    // </p>`)
}

server.listen(port, host, sayhello);