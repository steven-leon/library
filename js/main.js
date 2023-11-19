const openModal = document.querySelector("#add-book");
const modal = document.querySelector("#container-modal");
let myLibrary = [];

openModal.addEventListener("click", () =>{
    modal.showModal();
    
})

function Book(title,author,pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

};

function render(){
    let containerBooks = document.querySelector(".container-books");
    
     containerBooks.innerHTML = "";
    for(let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];

        let booksDiv = document.createElement("div");
        booksDiv.classList.add("books");

        let bookDiv = document.createElement("div");
        bookDiv.classList.add("book");

        let titlePara = document.createElement("p");
        titlePara.textContent = `"${book.title}"`;

        let authorPara = document.createElement("p");
        authorPara.textContent = book.author;

        let pagesPara = document.createElement("p");
        pagesPara.textContent = `${book.pages} pages`;

        let readButton = document.createElement("button");
        readButton.classList.add("readButton");
        if (book.read) {
            readButton.classList.add("read");
            readButton.textContent = "read";
        } else {
            readButton.classList.add("not-read");
            readButton.textContent = "not read";
        }

        readButton.addEventListener("click", () => {
           
            book.read = !book.read;
        
        
            if (book.read) {
                readButton.classList.remove("not-read");
                readButton.classList.add("read");
                readButton.textContent = "read";
            } else {
                readButton.classList.remove("read");
                readButton.classList.add("not-read");
                readButton.textContent = "not read";
            }
        });
   
     
        
        let removeButton = document.createElement("button");
        removeButton.classList.add("removeButton");
        removeButton.textContent = "remove";

        removeButton.addEventListener("click", () => {
            
            myLibrary.splice(i, 1);
         
            render();
        });

    
        bookDiv.appendChild(titlePara);
        bookDiv.appendChild(authorPara);
        bookDiv.appendChild(pagesPara);
        bookDiv.appendChild(readButton);
        bookDiv.appendChild(removeButton);

        
        containerBooks.appendChild(booksDiv);
        booksDiv.appendChild(bookDiv);


    }
};

function addBook(){
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector(".modal-checkbox input[type=checkbox]").checked;
    let newBook = new Book(title,author,pages,read)
    
    myLibrary.push(newBook)
    console.log(myLibrary)
    render();

};

document.querySelector("#form").addEventListener("submit", (event) => {
    event.preventDefault();
    addBook();
});