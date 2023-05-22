const bookContainer = document.querySelector(".book-container")
const addButton = document.querySelector(".add-button")



let removeButtons = []
let markAsReadButtons = []
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

    bookDiv.childNodes


}
function writeBookInfo(title,author,pages,bookDiv){

    const info = document.createElement('div')
    const bookOptions = document.createElement('div')

    let pageCount = document.createElement('h3')
    let authorName = document.createElement('h2')
    let titleName = document.createElement('h1')

    

    info.appendChild(titleName)
    info.appendChild(authorName)
    info.appendChild(pageCount)

    pageCount.innerHTML =  pages
    authorName.innerHTML = author
    titleName.innerHTML =  title
  

    let readButton = document.createElement('button')
    let removeButton = document.createElement('button')

    readButton.innerHTML = "Mark as read"
    removeButton.innerHTML = "Remove"

    

    bookOptions.appendChild(readButton)
    bookOptions.appendChild(removeButton)

    // removeButtons.push(readButton)
    // markAsReadButtons.push(removeButton)

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
    let bookInput = document.querySelector('#title').value
    let authorInput = document.querySelector('#author').value

    addBookToLibrary(bookInput,authorInput,310)
})





