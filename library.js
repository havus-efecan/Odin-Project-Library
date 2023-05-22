const bookContainer = document.querySelector(".book-container")
const addButton = document.querySelector(".add-button")
let myLibrary = [];

function Book(title,author,pages){
    this.title = title
    this.author = author
    this.pages = pages
}



function addBookToLibrary(title,author,pages){
    let currentBook = new Book(title,author,pages)
    myLibrary.push(currentBook)
    let bookDiv = document.createElement('div')
    bookDiv.classList.add("book")
    writeBookInfo(title,author,pages,bookDiv)
    bookContainer.appendChild(bookDiv)


}
function writeBookInfo(title,author,pages,bookDiv){

    const info = document.createElement('div')
    const bookOptions = document.createElement('div')

    const pageCount = document.createElement('h3')
    const authorName = document.createElement('h2')
    const titleName = document.createElement('h1')

    pageCount.innerHTML = "pages"
    authorName.innerHTML = "author"
    titleName.innerHTML = "titles"

    info.appendChild(titleName)
    info.appendChild(authorName)
    info.appendChild(pageCount)

    const readButton = document.createElement('button')
    const removeButton = document.createElement('button')

    readButton.innerHTML = "Mark as read"
    removeButton.innerHTML = "Remove"

    bookOptions.appendChild(readButton)
    bookOptions.appendChild(removeButton)

    bookDiv.appendChild(info)
    bookDiv.appendChild(bookOptions)

}


addButton.addEventListener('click', () => {
    addBookToLibrary("The Hobbit","JRR Tolkien",310)
})

// function displayBooks(){
//     let currentBook
//     let i = 0;
//     while( i< myLibrary.length){
//        let bookDiv = document.createElement('div')
//        bookDiv.classList.add("book")
//     //    let title = document.createElement('h3')
//     //    let author = document.createElement('h2')
//     //    let pages = document.createElement('p')
//         bookContainer.appendChild(bookDiv)
//         // bookDiv.appendChild(title)
        
//         currentBook = myLibrary[i]
//         // title.innerHTML = currentBook.title
//         i++;
//     }
// }



