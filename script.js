let submit = document.querySelector('.add'),
    shelf = document.querySelector('.books-shelf'),
    remove = document.querySelector('.remove'),
    library = []

CreateDiv.prototype = Object.create(Book.prototype)
addBookToLibrary.prototype = Object.create(Book.prototype)
removeBook.prototype = Object.create(Book.prototype)

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
        removeButton = document.createElement('button'),
        readButton = document.createElement('button'),
        removeButtons = [],
        readButtons = []

    removeButton.textContent = 'Remove'
    readButton.textContent = 'Read'

    // add text to the divs -----------------
    let title = document.createElement('p')
    title.textContent = `Title: "${this.title.value}"`
    divBook.appendChild(title)

    let author = document.createElement('p')
    author.textContent = `Author: ${this.author.value}`
    divBook.appendChild(author)

    let pages = document.createElement('p')
    pages.textContent = `Pages: ${this.pages.value}`
    divBook.appendChild(pages)

    // remove and read button added -----------
    divBook.appendChild(removeButton)
    divBook.appendChild(readButton)

    removeButton.classList.add('remove')
    readButton.classList.add('remove')

    // add the book to the shelf
    divBook.classList.add('book')
    shelf.appendChild(divBook)


    removeButtons.push(removeButton)
    removeButtons.forEach(button => {
        removeBook(button)
    })

    readButtons.push(readButton)
    readButtons.forEach(button => {
        read(button)
    })
}

function removeBook(removeButton) {
    removeButton.addEventListener('click', function () {
        let div = this.parentNode
        shelf.removeChild(div)
    })
}

function read(readButton) {
    readButton.addEventListener('click', function () {
        let button = this
        button.classList.toggle("read")

    })
}

submit.addEventListener('click', addBookToLibrary)

