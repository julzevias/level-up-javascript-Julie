// Write your code here

class Movie {

  constructor(title, director, genre, releaseYear, rating)  {
      this.title = title;
      this.director = director;
      this.genre = genre;
      this.releaseYear = releaseYear;
      this.rating = rating;
  }

  get getOverview() {
    return `${this.title}, a ${this.genre} film directed by ${this.directordirector} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`
  }
}

const movie1 = new Movie("Harry Potter", "Movie Director", "fantasy", "2010", "5 star");

console.log(movie1.title);
console.log(movie1.getOverview);



// function prototype

function Movie2(title, director, genre, releaseYear, rating) {
  this.title = title;
  this.director = director;
  this.genre = genre;
  this.releaseYear = releaseYear;
  this.rating = rating;
}

Movie2.prototype.getOverview = function() {
  return `${this.title}, a ${this.genre} film directed by ${this.directordirector} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`;
}

const getMovie = new Movie2('t', 'd', 'g', 'r', 'r');

console.log(getMovie.getOverview());