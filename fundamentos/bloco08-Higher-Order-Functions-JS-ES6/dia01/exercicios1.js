const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

function authorBornIn1947() {
  // escreva aqui o seu código
  const autor = books.find((book) => book.author.birthYear === 1947).author
    .birthYear;
  return autor;
}
console.log(authorBornIn1947(books));

function smallerName() {
  let nameBook;
  // escreva aqui o seu código
  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.lenght) {
      nameBook = book.name;
    }
  });

  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

console.log(smallerName(books));

function getNamedBook() {
  // escreva seu código aqui
  return books.find((book) => book.name.length === 26);
}

console.log(getNamedBook(books));

function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
  return books.sort((a, b) => b.releaseYear - a.releaseYear);
}

console.log(booksOrderedByReleaseYearDesc(books));

/* const expectedResult = false; */

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every(
    (book) => book.author.birthYear > 1900 && book.author.birthYear <= 2000
  );
}

console.log(everyoneWasBornOnSecXX(books));

/* const expectedResult = true; */

function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
  return books.some(
    (book) => book.releaseYear >= 1980 && book.releaseYear <= 1989
  );
}

console.log(someBookWasReleaseOnThe80s(books));

const expectedResult = false;

function authorUnique() {
  // escreva seu código aqui
  return books.every((book) => {
    !books.some(
      (booksome) =>
        booksome.author.birthYear === book.author.birthYear &&
        booksome.author.birthYear !== book.author.birthYear
    );
  });
}

console.log(authorUnique(books))


