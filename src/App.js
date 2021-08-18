import { useState } from "react";
import "./App.css";

var booksLibrary = {
  javascript: [
    {
      name: "Eloquent JavaScript",
      rating: "4/5",
    },
    {
      name: "You Don't Know JS",
      rating: "3.5/5",
    },
  ],

  fiction: [
    {
      name: "Shiva Trilogy",
      rating: "5/5",
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      rating: "4.5/5",
    },
  ],
  business: [
    {
      name: "Never Split the Difference",
      rating: "3.5/5",
    },
    {
      name: "Loonshots",
      rating: "5/5",
    },
  ],
};

var knownBooks = Object.keys(booksLibrary);

function App() {
  var [books, setBooks] = useState("javascript");

  function javascriptBooksHandler(bookName) {
    setBooks(bookName);
  }

  return (
    <div className="App">
      <h1>📚 Goodbooks</h1>
      <small>Checkout my favourite books. Select a genre to get started!</small>
      <br />
      <div>
        {knownBooks.map(function (bookName) {
          return (
            <button
              className="btnClass"
              onClick={() => javascriptBooksHandler(bookName)}
            >
              {bookName}
            </button>
          );
        })}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {booksLibrary[books].map(function (book) {
            return (
              <li className="listClass">
                <div style={{ fontSize: "larger" }}>{book.name}</div>
                <div style={{ fontSize: "smaller" }}>{book.rating}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
