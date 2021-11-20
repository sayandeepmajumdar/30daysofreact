import React from "react";
import ReactDOM from "react-dom";
//css importing
import "./index.css";

import { books } from "./books"; // this is my component's data
import Book from "./Book"; // this is my component. if the export is default then i can change the object name here

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>; // Spread operator (simply spread out the values from the book object)
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
