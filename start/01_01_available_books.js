// Write your code here

class Book {

  constructor(title, author, isbn, numCopies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.numCopies = numCopies;
  }

  get getAvailability() {
    if (this.numCopies === 0) {
      return "out of stock";
    } else if (this.numCopies < 10) {
      return "low stock";
    }

    return "in stock";
  }


  sell(numSold = 1) {
    return this.numCopies -= numSold;
  }

  restock(numCopies = 5) {
    return this.numCopies += numCopies;
  }

}

const book1 = new Book('Harry Potter', 'JK Rowling', 12345, 15);
console.log(book1.numCopies);
console.log(book1.getAvailability);
book1.sell(4);
console.log(book1.numCopies);
