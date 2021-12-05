let submit = document.querySelector('.add'),
    shelf = document.querySelector('.books-shelf'),
    library = []

function createDiv(title, author, pages) {
    let element = document.createElement('div'),
        bookEls = [title, author, pages],
        names = ['Title', 'Author', 'Pages']

    for (let i = 0; i < 3; i++) {
        let p = document.createElement('p')
        p.textContent = `${names[i]}:  ${bookEls[i]}`
        element.appendChild(p)
    }

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
    createDiv(book.title, book.author, book.pages)
}

submit.addEventListener('click', addBookToLibrary)

