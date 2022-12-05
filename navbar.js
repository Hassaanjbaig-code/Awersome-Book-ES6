const navList = document.getElementById('List');
const navAddNew = document.getElementById('AddNew');
const navContact = document.getElementById('Contact');

const listBookSection = document.getElementById('list-book');
const addNewBook = document.getElementById('addNew-book');
const contactMe = document.getElementById('Contact-Me');

navList.addEventListener('click', () => {
  listBookSection.classList.remove('hidden');
  addNewBook.classList.add('hidden');
  contactMe.classList.add('hidden');
});
navAddNew.addEventListener('click', () => {
  listBookSection.classList.add('hidden');
  addNewBook.classList.remove('hidden');
  contactMe.classList.add('hidden');
});
navContact.addEventListener('click', () => {
  listBookSection.classList.add('hidden');
  addNewBook.classList.add('hidden');
  contactMe.classList.remove('hidden');
});