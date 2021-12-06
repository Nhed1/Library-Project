let submit = document.querySelector('.add'),
    shelf = document.querySelector('.books-shelf'),
    library = []

function Book() {
    this.title = document.querySelector('#title').value
    this.author = document.querySelector('#author').value
    this.pages = document.querySelector('#pages').value
}

function addBookToLibrary() {
    let book = new Book;
    library.push(book)
}

function CreateDiv() {

}


CreateDiv.prototype = Object.create(Book.prototype)



submit.addEventListener('click', addBookToLibrary)

