let submit = document.querySelector('.add'),
    shelf = document.querySelector('.books-shelf'),
    library = []

function Book() {
    this.title = document.querySelector('#title').value
    this.author = document.querySelector('#author').value
    this.pages = document.querySelector('#pages').value

}

function addBookToLibrary() {
    if (title.value && author.value && pages.value) {
        let book = new Book;
        library.push(book)
        CreateDiv()
    } else {
        alert('You need to add all the information about the book')
    }
}

function CreateDiv() {
    let divBook = document.createElement('div'),
        removeButton = document.createElement('button')
    removeButton.textContent = 'Remover'

    // add text to the divs -----------------
    let title = document.createElement('p')
    title.textContent = this.title.value
    divBook.appendChild(title)

    let author = document.createElement('p')
    author.textContent = this.author.value
    divBook.appendChild(author)

    let pages = document.createElement('p')
    pages.textContent = this.pages.value
    divBook.appendChild(pages)

    // remove button added -----------
    divBook.appendChild(removeButton)
    // add the book to the shelf
    divBook.classList.add('book')
    shelf.appendChild(divBook)

    removeBook()
}

function removeBook() {
    console.log(this.removeButton)
}

CreateDiv.prototype = Object.create(Book.prototype)
addBookToLibrary.prototype = Object.create(Book.prototype)
removeBook.prototype = Object.create(CreateDiv.prototype)



submit.addEventListener('click', addBookToLibrary)

