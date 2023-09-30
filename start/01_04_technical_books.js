class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  // Getter
  get availability() {
    return this.getAvailability();
  }

  // Method
  getAvailability() {
    if (this.numCopies === 0) {
      return "Out of stock";
    } else if (this.numCopies < 10) {
      return "Low stock";
    }
    return "In stock";
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }
  
  restock(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }
}

// Write your code here

class TechnicalBook extends Book {
  constructor(title, author, isbn, numCopies, edition) {
    super(title, author, isbn, numCopies);
    this.edition = edition;
  }

  getEdition() {
    return `Edition: ${this.edition}`;
  }
}

const technicalBook1 = new TechnicalBook('harry potter', 'jk rowling', 34564, 25, 'edition5');

console.log(technicalBook1.getEdition());
console.log(technicalBook1.title);
