let myLibrary = [];

function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read
};

function addBookToLibrary() {
    let title = document.querySelector('#book-title').value;
    let author = document.querySelector('#book-author').value;
    let read = document.querySelector('#read').value;
    let newBook = new Book(title, author, read);
    myLibrary.push(newBook);
    console.log(myLibrary)
};

document.querySelector("#book-form").addEventListener("submit", function(event) {
    event.preventDefault();
    addBookToLibrary();
});

