const bookContainer = document.querySelector(".book-container")
const addButton = document.querySelector(".add-button")



let removeButtons = []
let markAsReadButtons = []
let myLibrary = [];


class Book{
    constructor(title,author,pages){
        this._title = title
        this._author = author
        this._pages = pages
    }

    get title() {
        return this._title
    }

    get author() {
        return this._author
    }

    get pages() {
        return this._pages
    }
}




function addBookToLibrary(book){
    


    myLibrary.push(book)
    let bookDiv = document.createElement('div')
    bookDiv.classList.add("book")
    writeBookInfo(book,bookDiv)
    bookContainer.appendChild(bookDiv)


}
function writeBookInfo(book,bookDiv){

    const info = document.createElement('div')
    const bookOptions = document.createElement('div')

    let pageCount = document.createElement('h3')
    let authorName = document.createElement('h2')
    let titleName = document.createElement('h1')

    

    info.appendChild(titleName)
    info.appendChild(authorName)
    info.appendChild(pageCount)

    pageCount.innerHTML =  book.pages
    authorName.innerHTML = book.author
    titleName.innerHTML =  book.title
  

    let readButton = document.createElement('button')
    let removeButton = document.createElement('button')

    readButton.innerHTML = "Mark as read"
    removeButton.innerHTML = "Remove"

    

    bookOptions.appendChild(readButton)
    bookOptions.appendChild(removeButton)


    bookDiv.appendChild(info)
    bookDiv.appendChild(bookOptions)

    

    readButton.classList.toggle('unread')

    readButton.addEventListener('click', () =>{

        readButton.classList.toggle('unread')
        readButton.classList.toggle('read')
        if(readButton.classList.contains('unread')){
            readButton.innerHTML = "Mark as read"
        } else {
            readButton.innerHTML = "Mark as unread"
        }
    }
    )

    removeButton.addEventListener('click',()=>{
        bookContainer.removeChild(bookDiv)
        let i = 0;
        while( i< myLibrary.length){
            if (myLibrary[i].title === title){
                myLibrary.splice(i)
            }
            i++;
        }
    })


    
}


addButton.addEventListener('click', (e) => {
    e.preventDefault()
    let titleInput = document.querySelector('#title').value
    let authorInput = document.querySelector('#author').value

    addBookToLibrary(new Book(titleInput,authorInput,300))
})





