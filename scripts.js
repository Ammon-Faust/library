let myLibrary = [];

function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read
};

function render() {
    let libraryElement = document.querySelector(".library-books");
    libraryElement.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookElement = document.createElement("div");
        bookElement.setAttribute("id", "card");
        bookElement.innerHTML = `
        <div>
            <h2 id="card-title">${book.title}</h2>
            <h3 id="card-author">${book.author}</h3>
            <h3 id="card-read">${book.read}</h3>
        </div>
        `
        libraryElement.appendChild(bookElement);
    }
}

function addBookToLibrary() {
    let title = document.querySelector('#book-title').value;
    let author = document.querySelector('#book-author').value;
    let read = document.querySelector('#read').value;
    let newBook = new Book(title, author, read);
    myLibrary.push(newBook);
    render();
};

document.querySelector("#book-form").addEventListener("submit", function(event) {
    event.preventDefault();
    addBookToLibrary();
});

