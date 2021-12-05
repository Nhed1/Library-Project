let submit = document.querySelector('.add'),
    shelf = document.querySelector('.books-shelf'),
    library = []

function createDiv() {
    let element = document.createElement('div')
    element.classList.add('book')
    shelf.appendChild(element)
}

function Book() {
    this.title = document.querySelector('#title').value
    this.author = document.querySelector('#author').value
    this.pages = document.querySelector('#pages').value
}

function addBookToLibrary() {
    let book = new Book;
    library.push(book)


    library.forEach(book => {
        createDiv()
    })
}

submit.addEventListener('click', addBookToLibrary)

