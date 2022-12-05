import ListBooks from './modules/App.js';
// import { DateTime } from './modules/luxon.js';
// import { DateTime } from "luxon";
const { DateTime } = require("luxon");

const pDateTime = document.getElementById('dateTime');
// pDateTime.textContent = "Hello"
pDateTime.innerText = `Date and Time: ${DateTime.now().toLocaleString(DateTime.DATETIME_MED)}`;

const listBook = new ListBooks();

const form = document.getElementById('addNewBook');
const [title, author, btnAddBook] = form.elements;

btnAddBook.addEventListener('click', (event) => {
  const error = document.getElementById('error');
  if (title.value.length === 0 || author.value.length === 0) {
    error.classList.remove('hidden');
    event.preventDefault();
  } else {
    error.classList.add('hidden');
    listBook.add(title.value, author.value);
    listBook.addto(title.value, author.value);
  }
});

//  Add the book in the local storage
window.addEventListener('beforeunload', () => {
  localStorage.setItem('listBook', JSON.stringify(listBook.bookcollection));
});

if (window.localStorage.getItem('listBook') !== 'undefined') {
  const list = JSON.parse(window.localStorage.getItem('listBook'));
  list.forEach((bookcollection) => {
    listBook.addto(bookcollection.title, bookcollection.author);
  });
}