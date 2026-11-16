// Q3: Library Management System (Classes + Objects)

class Book {
  constructor(title, author, isbn, isIssued = false) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = isIssued;
  }

  issueBook() {
    if (this.isIssued) {
      return false;
    }
    this.isIssued = true;
    return true;
  }

  returnBook() {
    if (!this.isIssued) {
      return false;
    }
    this.isIssued = false;
    return true;
  }
}

const books = [
  new Book("The Alchemist", "Paulo Coelho", "ISBN001"),
  new Book("Wings of Fire", "A. P. J. Abdul Kalam", "ISBN002"),
  new Book("Atomic Habits", "James Clear", "ISBN003", true),
  new Book("Ikigai", "Hector Garcia", "ISBN004")
];

const bookList = document.getElementById("bookList");
const issueForm = document.getElementById("issueForm");
const libraryMessage = document.getElementById("libraryMessage");

function displayAvailableBooks() {
  const availableBooks = books.filter(book => !book.isIssued);

  if (availableBooks.length === 0) {
    bookList.textContent = "No books are currently available.";
    return;
  }

  bookList.textContent = availableBooks
    .map(book => `${book.title} by ${book.author} (ISBN: ${book.isbn})`)
    .join("\n");
}

issueForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const enteredIsbn = document.getElementById("isbn").value.trim();
  const selectedBook = books.find(book => book.isbn.toLowerCase() === enteredIsbn.toLowerCase());

  if (!selectedBook) {
    libraryMessage.textContent = "No book found with that ISBN.";
    libraryMessage.style.color = "red";
  } else if (!selectedBook.issueBook()) {
    libraryMessage.textContent = "This book has already been issued.";
    libraryMessage.style.color = "red";
  } else {
    libraryMessage.textContent = `Successfully issued: ${selectedBook.title}`;
    libraryMessage.style.color = "green";
    displayAvailableBooks();
  }
});

displayAvailableBooks();
