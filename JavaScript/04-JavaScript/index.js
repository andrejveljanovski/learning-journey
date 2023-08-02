// 1 ;;
let books = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    maxPages: 200,
    onPage: 60,
  },
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    maxPages: 250,
    onPage: 150,
  },
  {
    title: "50 Shades of Grey",
    author: "E.L.James",
    maxPages: 150,
    onPage: 150,
  },
  {
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    maxPages: 350,
    onPage: 300,
  },
  {
    title: "Hamlet",
    author: "William Shakespeare",
    maxPages: 550,
    onPage: 550,
  },
];

// 2 ;;
const bookList = document.querySelector("#book-list");
let list = document.createElement("ol");

const readStatus = document.querySelector("#read-status");
let statusList = document.createElement("ol");

const booksTable = document.querySelector("#books-table");
const table = document.createElement("table");
const tHead = document.createElement("thead");
tHead.innerHTML = `<tr style="font-weight: bold;"><td>Title</td><td>Author</td><td>Max Pages</td><td>On Page</td><td>Progress</td></tr>`;
const tBody = document.createElement("tbody");
table.append(tHead);
table.append(tBody);
booksTable.append(table);

const populateList = (title, author) => {
  list.innerHTML += `<li>${title} by ${author}</li>`;
  bookList.append(list);
};

books.forEach((el) => populateList(el.title, el.author));

// 3 ;;

const populateStatusList = (maxPages, onPage, title, author) => {
  if (maxPages > onPage) {
    statusList.innerHTML += `<li style="color: red;">You still need to read ${title} by ${author}. You got ${
      maxPages - onPage
    } pages left.</li>`;
  } else if (maxPages === onPage) {
    statusList.innerHTML += `<li style="color: green;">You already read ${title} by ${author}</li>`;
  }
  readStatus.append(statusList);
};

books.forEach((el) =>
  populateStatusList(el.maxPages, el.onPage, el.title, el.author)
);

// 4 ;;

const readPercentage = (currentPage, maxPage) => {
  const percentage = Math.floor((currentPage / maxPage) * 100);
  const progressBarStyle = `background-color: green; height: 18px; width: ${percentage}%;`;
  const progressBar = `<div style="${progressBarStyle}; ">${percentage}%</div>`;
  return progressBar;
};

let counter = 0;

const populateTable = (title, author, maxPages, onPage) => {
  counter++;
  tBody.innerHTML += `<tr><td>${title}</td><td>${author}</td><td>${maxPages}</td><td>${onPage}</td><td style="width: 100px; padding:0;">${readPercentage(
    onPage,
    maxPages
  )}</td><td>
  <button id="edit-${counter}" class="editBtn">
    Edit Progress
  </button>
</td></tr>`;
  let editBtn = document.querySelector(`#edit-${counter}`);
  editBtn.addEventListener("click", (event) => {
    editProgress(event.target.id);
  });
};

let editProgress = (editId) => {
  let index = editId.split("-")[1];
  console.log(index);
};

books.forEach((el, key) =>
  populateTable(el.title, el.author, el.maxPages, el.onPage, key)
);

// 5;;

let addNewBook = document.querySelector("#add-new-book");

class NewBook {
  constructor(_title, _author, _maxPages, _onPage) {
    this.title = _title;
    this.author = _author;
    this.maxPages = _maxPages;
    this.onPage = _onPage;
  }
}

const onSubmitBook = (event) => {
  event.preventDefault();
  let bookTitle = document.querySelector("#book-title").value;
  let bookAuthor = document.querySelector("#book-author").value;
  let bookMaxPage = +document.querySelector("#max-page").value;
  let bookCurrentPage = +document.querySelector("#current-page").value;

  if (
    bookCurrentPage > bookMaxPage ||
    bookTitle.length < 4 ||
    bookAuthor.length < 4
  ) {
    alert("Invalid input");
  } else {
    let book = new NewBook(bookTitle, bookAuthor, bookMaxPage, bookCurrentPage);
    books.push(book);
    populateList(book.title, book.author);
    populateStatusList(book.maxPages, book.onPage, book.title, book.author);
    populateTable(book.title, book.author, book.maxPages, book.onPage);
    document.querySelector("#book-title").value = "";
    document.querySelector("#book-author").value = "";
    document.querySelector("#max-page").value = "";
    document.querySelector("#current-page").value = "";
  }
};

addNewBook.addEventListener("submit", onSubmitBook);
