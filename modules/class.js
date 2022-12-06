export default class Books {
  constructor(title, author = null, id) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
}
