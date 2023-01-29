// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

const allBooks = []

const book1 = {
    title: "Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    image: "https://picsum.photos/200",
    alreadyRead: false
}

const book2 = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://picsum.photos/200",
    alreadyRead: true
}

allBooks.push(book1, book2)

const table = document.createElement("table")
table.innerHTML = `
    <thead>
        <tr>
            <th colspan=3>My Book List</th>
        </tr>
    </thead>
    <tbody>
        <tr class="${book1.alreadyRead ? 'is-read' : ''}">
            <td>${book1.title} written by ${book1.author}</td>
            <td><img src="${book1.image}"/></td>
            <td>Already read? ${book1.alreadyRead}</td>
        </tr>
        <tr class="${book2.alreadyRead ? 'is-read' : ''}">
            <td>${book2.title} written by ${book2.author}</td>
            <td><img src="${book2.image}"/></td>
            <td>Already read? ${book2.alreadyRead}</td>
        </tr>
    </tbody>
`
const bookListDiv = document.querySelector(".list-books");
console.log(bookListDiv)
bookListDiv.appendChild(table);